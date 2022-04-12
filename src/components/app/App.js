import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from '../product-page/ProductPage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import Header from '../header/Header';
import Toast from '../toast/Toast';
import checkIcon from '../assets/check.svg';
import errorIcon from '../assets/error.svg';
// import infoIcon from '../assets/info.svg';
// import warningIcon from '../assets/warning.svg';

/**
 * @name App
 * @returns component
 */
const App = () => {
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <ProductPage />} />
      <Route exact path="/checkout" render={() => <CheckoutPage />} />
      <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
    </Switch>
  </BrowserRouter>;
  const testList = [
    {
      id: 1,
      title: 'Success',
      description: 'This is a success toast component',
      backgroundColor: '#5cb85c',
      icon: checkIcon
    },
    {
      id: 2,
      title: 'Danger',
      description: 'This is an error toast component',
      backgroundColor: '#d9534f',
      icon: errorIcon
    }
  ];

  return (
    <div className="app">
      <div className="app-header" />
      <Toast
        toastList={testList}
        position="bottom-right"
      />
    </div>
  );
};

export default App;
