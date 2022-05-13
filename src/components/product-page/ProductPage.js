import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ReactPaginate from 'react-paginate';
import ProductCard from '../product-card/ProductCard';
import Constants from '../../utils/constants';
import Filter from '../filter-menu/Filter';
import fetchProducts2 from '../Pagination/PaginationService';
import fetchProductsCount2 from '../Pagination/Pagination_PageCount';
import fetchProducts from './ProductPageService';
import styles from './ProductPage.module.css';

/**
 * @name ProductPage
 * @description fetches products from API and displays products as product cards
 * @return component
 */

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [urlQuery, setUrlQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState();

  const filterByQuery = () => {
    fetchProducts(setProducts, currentPage, urlQuery, setApiError);
  };
  useEffect(() => {
    fetchProducts(currentPage, setProducts, setApiError);
  }, [currentPage]);
  useEffect(() => {
    fetchProducts(setApiError, urlQuery);
  }, [urlQuery]);

  /**
 * This hook fetches the current page number and
 * displays a number of products according
 * to page number
 */
  useEffect(() => {
    fetchProducts2(setProducts, setApiError);
  }, []);
  /**
   * This hook fetches the total page count of
   * the pagination
   */
  useEffect(() => {
    fetchProductsCount2(setCount, setApiError);
  }, [count]);

  /**
   * This function allows clicks to individual page numbers
   * @param { } selected
        */

  const handleClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    filterByQuery(selectedPage);
  };

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
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Box>
      <div>
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          pageCount={count}
          marginPagesDisplayed={0}
          pageRangeDisplayed={9}
          onPageChange={handleClick}
          containerClassName={`${styles.pagination} ${styles.justifyContentCenter}`}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.pageItem}
          previousLinkClassName={styles.pageLink}
          nextClassName={styles.pageItem}
          nextLinkClassName={styles.pageLink}
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.pageLink}
          activeClassName={styles.active}
          renderOnZeroPageCount={false}
          forcePage={currentPage}
          disabledClassName={styles.hide}
        />
      </div>
    </div>
  );
};

export default ProductPage;
