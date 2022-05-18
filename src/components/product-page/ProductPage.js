import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ReactPaginate from 'react-paginate';
import ProductCard from '../product-card/ProductCard';
import Constants from '../../utils/constants';
import Filter from '../filter-menu/Filter';
import { fetchProducts, fetchInitialProducts, fetchProductsCount } from './ProductPageService';
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

  /**
 *
 * @name filterByQuery
 * @description Function that runs when apply button is clicked
 * SetCurrentPage sets the current page once the filters have been appplied
 * fetchProducts sets the products based upon the page selected and url query. It also sets
 * any api errors.
 * setURlQuery sets the urlQuery once the apply button has been clicked to use in the
 * fetchProductsCount useEffect.
 * @param {*} selected page selected from the pagination buttons
 */

  const filterByQuery = (selected) => {
    setCurrentPage(selected);
    fetchProducts(setProducts, selected, urlQuery, setApiError);
    setUrlQuery(urlQuery);
  };

  /**
   * This hook sets the products before anything has been selected
   *
   */
  useEffect(() => {
    fetchInitialProducts(setProducts, setApiError);
  }, []);

  /**
   * This hook fetches the total page count of
   * the pagination
   */
  useEffect(() => {
<<<<<<< HEAD
    fetchProductsCount(setCount, setApiError);
  }, [count]);
=======
    fetchProductsCount(setCount, urlQuery, setApiError);
  }, [count, urlQuery]);
>>>>>>> 920dcd15b84e16bfd1e1387aff69ea398ccb25da

  /**
   * This function allows clicks to individual page numbers
   * @param { } selected
        */

  const handleClick = ({ selected }) => {
    setCurrentPage(selected);
    filterByQuery(selected);
  };
  return (
<<<<<<< HEAD
    <>

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
            breakLabel="..."
            pageCount={count}
            marginPagesDisplayed={0}
            pageRangeDisplayed={9}
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
            renderOnZeroPageCount={false}
            forcePage={currentPage}
            disabledClassName={styles.hide}
          />
        </div>
=======
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
>>>>>>> 920dcd15b84e16bfd1e1387aff69ea398ccb25da
      </div>
    </>
  );
};

export default ProductPage;
