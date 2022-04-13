import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

const Toast = (props) => {
  const {
    toastList, position, autoDelete, autoDeleteTime
  } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    list.splice(toastListItem, 1);
    setList([...list]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div className={`notification-container ${position}`}>
        {
                  list.map((toast, listIndex) => (
                    <div
                      key={listIndex.id}
                      className={`notification toast ${position}`}
                      style={{ backgroundColor: toast.backgroundColor }}
                    >
                      <button type="button" onClick={() => deleteToast(toast.id)}>
                        X
                      </button>
                      <div className="notification-image">
                        <img src={toast.icon} alt="" />
                      </div>
                      <div>
                        <p className="notification-title">{toast.title}</p>
                        <p className="notification-message">
                          {toast.description}
                        </p>
                      </div>
                    </div>
                  ))
              }
      </div>
    </>
  );
};

Toast.defaultProps = {
  position: 'centered',
  autoDelete: true,
  autoDeleteTime: 8000
};

Toast.propTypes = {
  toastList: PropTypes.arrayOf.isRequired,
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.number
};
export default Toast;
