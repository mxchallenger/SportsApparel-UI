import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const toasty = () => (

  <div>
    <button type="button" onClick={() => toast.info('You have been notified.')}>Notify</button>
    <button type="button" onClick={() => toast.success('Sucess!')}>Success</button>
    <button type="button" onClick={() => toast.error('Something went wrong.')}>Error</button>

  </div>
);

export default toasty;
