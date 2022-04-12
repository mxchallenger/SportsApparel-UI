import React, { useEffect, useState } from 'react';
import styles from './ProductView.module.css';
import Constants from '../../utils/constants';
import fetchProducts from './ProductViewService';

/**
 * @name ProductView
 * @description fetches products from API and displays products in a table
 * @return component
 */
const ProductView = () => {
    const [products, setProducts] = useState([]);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchProducts(setProducts, setApiError);
    }, []);

    return (
        <div>
            {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
            <h1>Maintenance Page</h1>
        </div>
    );
};

export default ProductView;
