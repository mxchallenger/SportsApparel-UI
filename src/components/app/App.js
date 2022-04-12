import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from '../product-page/ProductPage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import Header from '../header/Header';
import Toast from '../toast/Toast';
import checkIcon from '../assets/check.svg';
import errorIcon from '../assets/error.svg';
import infoIcon from '../assets/info.svg';
import warningIcon from '../assets/warning.svg';
import Button from '../button/Button';

const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 2,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  },
  {
    id: 3,
    type: 'info',
    className: 'info',
    label: 'Info'
  },
  {
    id: 4,
    type: 'warning',
    className: 'warning',
    label: 'Warning'
  }
];

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
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type) => {
    const id = Math.floor((Math.random() * 100) + 1);

    switch (type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
          icon: checkIcon
        };
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is an error toast component',
          backgroundColor: '#d9534f',
          icon: errorIcon
        };
        break;
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'This is an info toast component',
          backgroundColor: '#5bc0de',
          icon: infoIcon
        };
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
          icon: warningIcon
        };
        break;
      default:
        setList([]);
    }
    setList([...list, toastProperties]);
  };

  return (
    <div className="app">
      <div className="app-header">
        <p>React Toast Component</p>
        <div className="toast-buttons">
          {
        BUTTON_PROPS.map((e) => (
          <Button
            key={e.id}
            className={e.className}
            label={e.label}
            handleClick={() => showToast(e.type)}
          />
        ))
    }
        </div>
      </div>
      <Toast
        toastList={list}
        position="centered"
      />
    </div>
  );
};

export default App;
