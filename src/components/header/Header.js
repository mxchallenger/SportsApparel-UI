import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import loginUser from './HeaderService';
import constants from '../../utils/constants';
import './Header.css';
import logo from './logo.png';
import cart from './cart.png';
import maint from './wrench.png';
import { useCart } from '../checkout-page/CartContext';
/**
 * @name Header
 * @description Displays the navigation header
 * @return component
 */

const Header = () => {
  const [user, setUser] = useState('');
  const [googleError, setGoogleError] = useState('');
  const [apiError, setApiError] = useState(false);
  /**
   * @name handleGoogleLoginSuccess
   * @description Function to run if google login was successful
   * @param {Object} response Response object from google
   */
  const handleGoogleLoginSuccess = (response) => {
    sessionStorage.setItem('token', response.getAuthResponse().id_token);
    const googleUser = {
      email: response.profileObj.email,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName
    };
    loginUser(googleUser, setUser, setApiError);
    setGoogleError('');
  };

  /**
   * @name handleGoogleLoginSuccess
   * @description Function to run if google login was unsuccessful
   */
  const handleGoogleLoginFailure = () => {
    setGoogleError('There was a problem logging in with Google. Please wait and try again later.');
  };

  /**
   * @name handleGoogleLogoutSuccess
   * @description Function to run if google logout was successful
   */
  const handleGoogleLogoutSuccess = () => {
    setUser('');
    setGoogleError('');
  };

  /**
   * @name handleGoogleLogoutFailure
   * @description Function to run if google logout was unsuccessful
   */
  const handleGoogleLogoutFailure = () => {
    setGoogleError('There was a problem logging out with Google. Please wait and try again later.');
  };

  const {
    state: { products },
    dispatch
  } = useCart();
  dispatch.useCart = null;
  return (
    <div className="header">
      <div id="home">
        <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
      </div>
      <div id="maint">
        <NavLink to="/maintenance"><img src={maint} alt="Maintenance" /></NavLink>
      </div>
      <div id="cart">
        <NavLink to="/checkout">
          <img src={cart} alt="cart" />
        </NavLink>
      </div>
      <div id="cart-icon">
        <NavLink to="/checkout">
          <svg style={{ height: 35, width: 35 }}>
            <circle cx={15} cy={15} r={15} stroke="black" strokeWidth={1} fill="red" scale="auto" />
            <text x="42%" y="45%" stroke="#ffff" textAnchor="middle" strokeWidth="1px" dy=".3em">
              {products.length}
            </text>
          </svg>
        </NavLink>
      </div>
      {user && <span>{user.firstName}</span>}
      {user && <span>{user.lastName}</span>}
      {googleError && <span>{googleError}</span>}
      {apiError && <span>Api Error</span>}
      {!user ? (
        <div id="googleLogin">
          <GoogleLogin
            clientId={constants.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
      ) : (
        <div id="googleLogout">
          <GoogleLogout
            clientId={constants.GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={handleGoogleLogoutSuccess}
            onFailure={handleGoogleLogoutFailure}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
