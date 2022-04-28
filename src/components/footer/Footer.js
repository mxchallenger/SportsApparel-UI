import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const [visible, setVisible] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', setVisible);
  return (
    <div className={styles.parent}>
      <div className={styles.div5}>
        <p id={styles.footerlogo}>
          2021 Sports Apparel, Inc &#169;
        </p>
      </div>
      <div className={styles.div2}>

        <FaArrowUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none', color: 'red' }} />

      </div>

    </div>
  );
};

export default Footer;
