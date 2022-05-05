import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../product-card/ProductCard';
import styles from './ProductPage.module.css';
import Constants from '../../utils/constants';
import fetchProducts from './ProductPageService';
import fetchProductsCount from '../Pagination/Pagination';

/**
 * @name ProductPage
 * @description fetches products from API and displays products as product cards
 * @return component
 */
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState();

  useEffect(() => {
    fetchProducts(currentPage, setProducts, setApiError);
  }, [currentPage]);

  useEffect(() => {
    fetchProductsCount(setCount, setApiError);
  }, [count]);

  const handleClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);

    // step one save current page on click
    // 2 pass current page into a request
    // 3 send request to backend for products according to page number
    // Use this service to get the total product count
  };
  return (
    <div>
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
      <div className={styles.app}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div>
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel=""
          pageCount={count}
          marginPagesDisplayed=""
          pageRangeDisplayed="10"
          onPageChange={handleClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default ProductPage;
