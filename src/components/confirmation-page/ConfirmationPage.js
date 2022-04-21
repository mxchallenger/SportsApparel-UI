import React from 'react';
import { toast } from 'react-toastify';

/**
 * @name ProductPage
 * @description fetches products from API and displays products as product cards
 * @return component
 */
const ProductPage = () => (
  <div>
    Order success!
    <button type="button" onClick={() => toast.info('You have been notified.')}>Notify</button>
    <button type="button" onClick={() => toast.success('Order Success!')}>Success</button>
    <button type="button" onClick={() => toast.error('Something went wrong.')}>Error</button>
  </div>
);

export default ProductPage;
