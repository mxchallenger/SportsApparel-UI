import React, { useState } from 'react';
import styles from './UserProfile.module.css';
import { useUser } from './UserContext';
import fetchUsers from './UserProfileService';
import FormItem from '../form/FormItem';

const UserProfile = () => {
  const {
    state: { users }
  } = useUser();

  const [userData, setUserData] = useState([]);
  const [apiError, setApiError] = useState(false);

  React.useEffect(() => {
    fetchUsers(setUserData, setApiError, users);
  }, [users]);

  return (
    <>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfo}>
          <div className={styles.step}>
            <h3 className={styles.title}>Profile Information</h3>
            <div>{apiError}</div>

            <FormItem
              type="text"
              id="firstName"
              label="First Name"
              value={users.firstName}
              className={styles.input}
            />

            <FormItem
              type="text"
              id="LastName"
              label="Last Name"
              value={users.lastName}
              className={styles.input}
            />

            <FormItem
              type="text"
              id="street"
              label="Street"
              value={userData.street}
              className={styles.input}
            />

            <FormItem
              type="text"
              id="city"
              label="City"
              value={userData.city}
              className={styles.input}
            />

            <FormItem
              type="text"
              id="state"
              label="State"
              value={userData.state}
              className={styles.input}
            />

            <FormItem
              type="text"
              id="zip"
              label="Zip"
              value={userData.zip}
              className={styles.input}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
