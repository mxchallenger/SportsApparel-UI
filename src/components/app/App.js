import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from '../product-page/ProductPage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import Header from '../header/Header';
import Maintenance from '../maintenance/Maintenance';
import AddProductPage from '../add-product-page/AddProductPage';
import Toast from '../toast/Toast';
import Footer from '../footer/Footer';
import UserProfile from '../userprofile/UserProfile';

/**
 * @name App
 * @returns component
 */
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <ProductPage />} />
      <Route exact path="/checkout" render={() => <CheckoutPage />} />
      <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
      <Route exact path="/maintenance" render={() => <Maintenance />} />
      <Route exact path="/add-product-page" render={() => <AddProductPage />} />
      <Route exact path="/toast" render={() => <Toast />} />
      <Route exact path="/userProfile" render={() => <UserProfile />} />
    </Switch>
    <ToastContainer
      position="top-center"
      autoClose={8000}
    />

    <Footer />

  </BrowserRouter>
);
export default App;
