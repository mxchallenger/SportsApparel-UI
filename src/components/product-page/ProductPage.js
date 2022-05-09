import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ProductCard from '../product-card/ProductCard';
import Constants from '../../utils/constants';
import Filter from '../filter-menu/Filter';
import { fetchProducts, fetchProductsCount } from './ProductPageService';
import styles from './ProductPage.module.css';

/**
 * @name ProductPage
 * @description fetches products from API and displays products as product cards
 * @return component
 */

const ProductPage = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [urlQuery, setUrlQuery] = useState('');

  const filterByQuery = () => {
    fetchProducts(setProducts, urlQuery, setApiError);
  };
  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);
  useEffect(() => {
    fetchProductsCount(setApiError, urlQuery);
  }, [urlQuery]);

  return (
    <div>
      <Box>
        <Filter
          setUrlQuery={setUrlQuery}
          applyFilters={filterByQuery}
        />
        {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
        <div className={styles.app}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} user={user} />
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default ProductPage;
