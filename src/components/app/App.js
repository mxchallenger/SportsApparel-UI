import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import ProductPage from '../product-page/ProductPage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import Header from '../header/Header';
import Maintenance from '../maintenance/Maintenance';
import Toast from '../toast/Toast';
import Footer from '../footer/Footer';

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
      <Route exact path="/toast" render={() => <Toast />} />
    </Switch>
    <ToastContainer
      position="top-center"
      autoClose={8000}
    />
    <ReactPaginate />
    <Footer />
  </BrowserRouter>

);
export default App;
