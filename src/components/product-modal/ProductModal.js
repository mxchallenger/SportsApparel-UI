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
          <IconButton aria-label="Close this page" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="modal-title" />
        <div className="modal-body">
          <CardContent>
            <img style={{ height: '250px', width: '250px' }} src={product.imageSrc} alt="" />

            <span className="primary-color">
              {product.primaryColorCode}
              <svg style={{ height: 50, width: 50 }}>
                <circle cx={18} cy={23} r={14} stroke="black" strokeWidth={1} fill={product.primaryColorCode} />
              </svg>
            </span>

            <span className="secondary-color ">
              {product.secondaryColorCode}
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
            <Typography component="p">
              Price: $
              {parseFloat(product.price).toFixed(2).toString()}
            </Typography>
          </span>
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
