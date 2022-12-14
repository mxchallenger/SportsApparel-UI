import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { BsTools } from 'react-icons/bs';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { toast } from 'react-toastify';
import loginUser from './HeaderService';
import constants from '../../utils/constants';
import './Header.css';
import logo from './logo.png';
import cart from './cart.png';
import { useCart } from '../checkout-page/CartContext';
import { useUser } from '../userprofile/UserContext';
import ViewProfile from '../userprofile/ViewProfile';
/**
 * @name Header
 * @description Displays the navigation header
 * @return component
 */

const Header = () => {
  const [user, setUser] = useState('');
  const [googleError, setGoogleError] = useState('');
  const [apiError, setApiError] = useState(false);

  const history = useHistory();
  const {

    userDispatch
  } = useUser();

  /**
   * @name handleGoogleLoginSuccess
   * @description Function to run if google login was successful
   * @param {Object} response Response object from google
   */
  const HandleGoogleLoginSuccess = (response) => {
    sessionStorage.setItem('token', response.getAuthResponse().id_token);
    const googleUser = {
      email: response.profileObj.email,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName
    };
    loginUser(googleUser, setUser, setApiError);
    setGoogleError('');
    userDispatch(
      {
        type: 'add',
        users: {
          firstName: googleUser.firstName,
          lastName: googleUser.lastName,
          email: googleUser.email

        }
      }
    );
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
    history.push('/');
    setUser('');
    setGoogleError('');
    userDispatch(
      {
        type: 'delete',
        users: {
        }
      }
    );
    toast.success('You have successfully logged out.');
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
              {products.length > 9 ? ('9+') : (products.length)}
            </text>
          </svg>
        </NavLink>
      </div>
      <div id="maint">
        <NavLink to="/maintenance"><BsTools size={25} style={{ fill: 'white' }} alt="maint" /></NavLink>
      </div>

      {googleError && <span>{googleError}</span>}
      {apiError && <span>Api Error</span>}
      {!user ? (
        <div id="googleLogin">
          <GoogleLogin
            clientId={constants.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={HandleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy="single_host_origin"
            isSignedIn
          />
        </div>
      ) : (
        <div id="googleLogout">
          <div id="viewProfile">
            <ViewProfile />
          </div>
          {user && <div className="firstName">{user.firstName}</div>}
          {user && <div className="lastName">{user.lastName}</div>}
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
