/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { BsFillFilterCircleFill } from 'react-icons/bs';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { IconContext } from 'react-icons';
// import CheckBox from '../filter/checkbox';
import loginUser from './HeaderService';
import constants from '../../utils/constants';
import './Header.css';
import logo from './logo.png';
import cart from './cart.png';
import maint from './wrench.png';
import demographicFilters from '../filter/DemographicFilterData';

/**
 * @name Header
 * @description Displays the navigation header
 * @return component
 */

const Header = () => {
  const [user, setUser] = useState('');
  const [googleError, setGoogleError] = useState('');
  const [apiError, setApiError] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

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

  return (
    <div className="header">
      <div id="home">
        <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
      </div>
      <div id="maint">
        <NavLink to="/maintenance"><img src={maint} alt="Maintenance" /></NavLink>
      </div>
      <div id="cart">
        <NavLink to="/checkout"><img src={cart} alt="cart" /></NavLink>
      </div>
      <>
        <IconContext.Provider value={{ color: 'red' }}>
          <div className="filter">
            <Link to="/" className="menu-bars">
              <AiOutlineMenu onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="/" className="menu-bars">
                  <AiOutlineClose />
                </Link>
              </li>
              {demographicFilters.map((item) => (
                <li key={item} className={item.cName}>
                  <div className="Demographics">
                    <input
                      type="checkbox"
                      id="MENS"
                      name="MENS"
                      value="MENS"
                      checked={isChecked}
                      onChange={handleOnChange}
                    />
                  </div>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
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
