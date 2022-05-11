import React from 'react';

function Modal() {
  return (
    <div className="modalBackground">
      <div className="modalConatainer">
        <button type="button"> X </button>
        <div className="header">
          <h2>Product Name</h2>
        </div>
        <div className="body">
          <p>Product info</p>
        </div>
        <div className="footer">
          <h1>Other buttons</h1>
        </div>
      </div>
    </div>
  );
  /* <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <h1>header</h1>
        <button type="button" className="button">X</button>
        <h4 className="modal-title">Modal title</h4>
      </div>
      <div className="modal-body">
        <h1>this is modal content</h1>
      </div>
      <div className="modal-footer" />
      <h1>footer</h1>
    </div>
  </div> */
}

export default Modal;
