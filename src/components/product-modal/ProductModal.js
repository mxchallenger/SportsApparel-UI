import React from 'react';
import ReactDom from 'react-dom';
import {
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
  makeStyles
/*   CardMedia */
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Quantity from './QuantityPicker';
import styles from './quantitypicker.module.css';

export default function Modal({ product, props, onClose }) {
  if (!props) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" role="none" onClick={onClose} />
      <div className="modal-content" role="none" onChange={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <CardHeader
            avatar={(
              <Avatar aria-label="demographics" className={makeStyles.avatar}>
                {product.demographic.charAt(0)}
              </Avatar>
            )}
          />
          <div className={styles.title}>
            {product.name}
            <br />
            {`${product.demographic} ${product.category} ${product.type}`}
          </div>

          <IconButton aria-label="Close this page" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="modal-title" />
        <div className="modal-body">
          <CardContent>
            <img style={{ height: '250px', width: '250px' }} src={product.imageSrc} alt="" />

            <span className="primary-color">
              <svg style={{ height: 50, width: 50 }}>
                <circle cx={18} cy={23} r={14} stroke="black" strokeWidth={1} fill={product.primaryColorCode} />
              </svg>
            </span>

            <span className="secondary-color ">
              <svg style={{ height: 50, width: 50 }}>
                <circle cx={18} cy={23} r={14} stroke="black" strokeWidth={1} fill={product.secondaryColorCode} />
              </svg>
            </span>
          </CardContent>
          <div className="category">
            <Typography color="textSecondary" component="p">
              {product.description}
            </Typography>
          </div>
        </div>
        <div className="modal-footer">
          <span className="price">
            <Typography component="p" color="textPrimary">
              Price: $
              {parseFloat(product.price).toFixed(2).toString()}
            </Typography>
          </span>

          <Quantity max={product.quantity} />
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
