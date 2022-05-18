import React from 'react';
import styles from './Reviews.module.css';
/**
 * Instantiates on icon from product-page for "reviews" icon.
 * Fetches that product from product DTO
 * Fetches those reviews from reviews DTO
 * @returns New component view of combined product DTO page and review
 * DTO page linked by product ID.
 */
const ReviewPage = () => {
  const review = {
    title: '',
    rating: '',
    author: '',
    text: '',
    product: ''
  };

  return (
    <div className={styles.reviewContainer}>
      <div className={`${styles.step} ${styles.product}`}>
        <h3 className={styles.title}>Product</h3>
        Image Here
        Product Stuff Here
        Add to Cart Here
      </div>
      <div className={`${styles.step} ${styles.review}`}>
        <h3 className={styles.title}>Reviews</h3>
        Reviews Display Here
      </div>
    </div>
  );
};

export default ReviewPage;
