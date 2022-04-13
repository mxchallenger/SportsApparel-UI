import React, { useState } from 'react';
import Toast from './Toast';
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
 * @name ToastDemoPage
 * @description
 * @return component
 */
const ToastDemoPage = () => {
  const [list, setList] = useState([]);
  const [autoDeleteTime] = useState(8000);
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
        <p>Toast Demo</p>
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
        autoDeleteTime={autoDeleteTime}
      />
    </div>
  );
};

export default ToastDemoPage;
