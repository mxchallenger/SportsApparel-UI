import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function toasty() {
  const notify = () => toast('You have been notified.');

  return (
    <div>
      <button type="button" onClick={notify}>Notify!</button>
      <ToastContainer
        position="top-center"
        autoClose={8000}
      />
    </div>
  );
}

export default toasty;
