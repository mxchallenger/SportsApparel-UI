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
  // const [Filters, setFilters] = useState({
  //  demographics: []
  // });

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  // const showFilteredResults = (filters) => {
  //  fetchProducts;
  // };
  // const handleFilters = (filters, demographic) => {
  //  const newFilters = { ...Filters };
  //  newFilters[demographic] = filters;

  //  showFilteredResults(newFilters);
  //  setFilters(newFilters);
  // };

  return (
    <>
      <div>
        {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
        <Filter />
        <div className="page-wrap">
          <div className={styles.app} id="main">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
