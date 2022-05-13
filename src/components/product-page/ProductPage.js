import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../product-card/ProductCard';
import styles from './ProductPage.module.css';
import Constants from '../../utils/constants';
import fetchProducts from '../Pagination/PaginationService';
import fetchProductsCount from '../Pagination/Pagination_PageCount';
import Modal from '../Product Modal/ProductModal';
import modalStyles from '../Product Modal/Product Modal.css';

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
  const [show, setShow] = useState(false);

  /**
 * This hook fetches the current page number and
 * displays a number of products according
 * to page number
 */
  useEffect(() => {
    fetchProducts(currentPage, setProducts, setApiError);
  }, [currentPage]);
  /**
   * This hook fetches the total page count of
   * the pagination
   */
  useEffect(() => {
    fetchProductsCount(setCount, setApiError);
  }, [count]);

  /*  useEffect(() => {
    Modal(show, setShow);
  }, [show]); */

  /**
   * This function allows clicks to individual page numbers
   * @param {} selected
   */
  const handleClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  return (
    <>

      <div>
        {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
        <div className={styles.app}>
          <Modal className={modalStyles} props={show} onClose={() => setShow(false)} />
          {products.map((product) => (
            <div key={product.id}>
              <button type="button" className={styles.button} onMouseDown={() => setShow(true)}>
                <ProductCard product={product} />
              </button>
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
      </div>
    </>
  );
};

export default ProductPage;
