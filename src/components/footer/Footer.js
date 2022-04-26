import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
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
    <div className="footer">
      <p>2021 Sports Apparel, Inc &#169; </p>

      <button type="button" id="totop">
        {' '}
        <FaArrowUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
      </button>

    </div>
  );
};

export default Footer;
