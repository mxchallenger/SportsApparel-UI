import React, { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import ProductCard from '../product-card/ProductCard';
import styles from './ProductPage.module.css';
import Constants from '../../utils/constants';
import fetchProducts from './ProductPageService';

/**
 * @name ProductPage
 * @description fetches products from API and displays products as product cards
 * @return component
 */
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [updatedFilters, setUpdatedFilters] = useState('');

  useEffect(() => {
    fetchProducts(updatedFilters, setProducts, setApiError);
  }, [updatedFilters]);

  return (
    <>
      <div>
        {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
        <Filter setUpdatedFilters={setUpdatedFilters} />
        <div className={styles.app}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
