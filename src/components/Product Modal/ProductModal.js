/* import { CardMedia } from '@material-ui/core'; */
import React from 'react';
import ReactDom from 'react-dom';
/* import ProductCard from '../product-card/ProductCard'; */
/* import constants from '../../utils/constants'; */

export default function Modal({ props, onClose }) {
  if (!props) return null;

  /* const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keycode) === 27) {
      props.onClose();
    }
  } []); */

  /* useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]); */

  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="modal-content" role="none" onChange={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <button type="button" onClick={onClose}> &times; </button>
            <div className="modal-title">
              <h1>Title</h1>
            </div>
            <div className="modal-body" />
            <div className="modal-footer">
              <h1>Other buttons</h1>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
