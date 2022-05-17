import React from 'react';
import ReactDom from 'react-dom';
import {
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
  makeStyles,
  CardMedia
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { QuantityPicker } from 'react-qty-picker';
/* import { addColorBox } from '../maintenance/AddColorBox';
import { addImage } from '../maintenance/AddImage'; */
import constants from '../../utils/constants';

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
            <CardMedia
              className={makeStyles.media}
              image={constants.PLACEHOLDER_IMAGE}
              title="placeholder"
            />
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
          <QuantityPicker className="qPicker" min={0} value={0} smooth />
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
