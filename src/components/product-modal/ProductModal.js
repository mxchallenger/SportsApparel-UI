import React from 'react';
import ReactDom from 'react-dom';
import {
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
  makeStyles

} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Quantity from './QuantityPicker';
/* import styles from './ProductModal.css'; */

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
            action={(
              <IconButton aria-label="Close this page" onClick={onClose}>
                <CloseIcon />
              </IconButton>
          )}
            title={(
              <span className="modal-title">
                {product.name}
              </span>
              )}
            subheader={`${product.demographic} ${product.category} ${product.type}`}
          />
        </div>
        <div className="modal-body">
          <CardContent>
            <img style={{ height: '300px', width: '300px' }} src={product.imageSrc} alt="" />
            <span>
              <svg className="colors" style={{ height: 50, width: 50 }}>
                <circle cx={18} cy={23} r={14} stroke="black" strokeWidth={1} fill={product.primaryColorCode} />
              </svg>
            </span>
            <span>
              <svg className="colors" style={{ height: 50, width: 50 }}>
                <circle cx={18} cy={23} r={14} stroke="black" strokeWidth={1} fill={product.secondaryColorCode} />
              </svg>
            </span>
          </CardContent>
          <div className="category">
            <Typography color="textSecondary">
              {product.description}
            </Typography>
          </div>
        </div>
        <div>
          <CardContent className="modal-footer">
            <Typography variant="body1" color="textPrimary" component="p">
              Price: $
              {parseFloat(product.price).toFixed(2).toString()}
            </Typography>
          </CardContent>
          <span className="modal-footer">
            <Quantity className="quantity" max={product.quantity} min={1} />
          </span>
          <IconButton className="modal-footer" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
