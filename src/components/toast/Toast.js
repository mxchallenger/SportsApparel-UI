import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

const Toast = (props) => {
  const { toastList, position } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  const deleteToast = (id) => {
    const index = list.findIndex((e) => e.id === id);
    list.splice(index, 1);
    setList([...list]);
  };

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
  position: 'centered'
};

Toast.propTypes = {
  toastList: PropTypes.arrayOf.isRequired,
  position: PropTypes.string
};
export default Toast;
