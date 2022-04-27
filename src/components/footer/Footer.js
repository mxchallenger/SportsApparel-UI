import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className={styles.parent}>
      <div className={styles.div5}>
        <p>
          2021 Sports Apparel, Inc &#169;
        </p>
      </div>
      <div className={styles.div2}>

        <FaArrowUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />

      </div>

    </div>
  );
};

export default Footer;
