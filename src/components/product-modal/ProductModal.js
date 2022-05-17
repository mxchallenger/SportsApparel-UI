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
import Quantity from './Quantity Picker';
/* import { addImage } from '../maintenance/AddImage'; */

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
            title={product.name}
            subheader={`${product.demographic} ${product.category} ${product.type}`}
          />
          <button className="close" type="button" onClick={onClose}> &times; </button>
        </div>
        <div className="modal-title" />
        <div className="modal-body">
          <CardContent>
            <img style={{ height: '250px', width: '250px' }} src={product.imageSrc} alt="" />
            <div>
              {product.primaryColorCode}
              <svg style={{ height: 25, width: 25 }}>
                <circle cx={9} cy={17} r={14} stroke="black" strokeWidth={1} fill={product.primaryColorCode} />
              </svg>
            </div>
            <div>
              {product.secondaryColorCode}
              <svg style={{ height: 25, width: 25 }}>
                <circle cx={9} cy={17} r={14} stroke="black" strokeWidth={1} fill={product.secondaryColorCode} />
              </svg>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              Price: $
              {parseFloat(product.price).toFixed(2).toString()}
            </Typography>
          </CardContent>
        </div>
        <div className="modal-footer">
          <Quantity />
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
