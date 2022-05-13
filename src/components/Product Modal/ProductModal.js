import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({ props, onClose }) {
  if (!props) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modalBackground">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <h1>Title</h1>
            </div>
            <div className="modal-body">
              Content
            </div>
            <button type="button" onClick={onClose}> &times; </button>
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
