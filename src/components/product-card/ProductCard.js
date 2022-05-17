/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { toast } from 'react-toastify';
import modalStyles from '../product-modal/ProductModal.css';
import styles from '../product-page/ProductPage.module.css';
import Constants from '../../utils/constants';
import { useCart } from '../checkout-page/CartContext';
import Modal from '../product-modal/ProductModal';

/**
 * @name useStyles
 * @description Material-ui styling for ProductCard component
 * @return styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

/**
 * @name ProductCard
 * @description displays single product card component
 * @param {*} props product
 * @return component
 */
const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const {
    state: { products },
    dispatch
  } = useCart();

  const onAdd = () => {
    for (const prod of products) {
      if (prod.id === product.id) {
        prod.quantity += 1;
        products.dispatch(
          {
            type: 'delete',
            product: {
              id: product.id,
              title: product.title,
              price: product.price,
              description: product.description,
              quantity: 1
            }
          },
          toast.success(`${product.name} has been added to your cart.`)
        );
      }
    }
    dispatch(
      {
        type: 'add',
        product: {
          id: product.id,
          title: product.name,
          price: product.price,
          description: product.description,
          quantity: 1
        }
      },
      toast.success(`${product.name} has been added to your cart.`)
    );
  };

  return (
    <>
      <Modal
        className={modalStyles}
        props={show}
        product={product}
        onClose={() => setShow(false)}
      />
      <button type="button" className={styles.button} onMouseDown={() => setShow(true)}>
        <Card
          className={classes.root}
        >

          <CardHeader
            avatar={(
              <Avatar aria-label="demographics" className={classes.avatar}>
                {product.demographic.charAt(0)}
              </Avatar>
          )}
            action={(
              <IconButton aria-label="settings" onMouseDown={(e) => e.stopPropagation(Modal)}>
                <MoreVertIcon />
              </IconButton>
          )}
            title={product.name}
            subheader={`${product.demographic} ${product.category} ${product.type}`}
          />
          <CardMedia
            className={classes.media}
            image={Constants.PLACEHOLDER_IMAGE}
            title="placeholder"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              Price: $
              {parseFloat(product.price).toFixed(2).toString()}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onMouseDown={(e) => e.stopPropagation(Modal)}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" onMouseDown={(e) => e.stopPropagation(Modal)}>
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="add to shopping cart" onClick={onAdd} onMouseDown={(e) => e.stopPropagation(Modal)}>
              <AddShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      </button>
    </>
  );
};

export default ProductCard;
