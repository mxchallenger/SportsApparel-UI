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
            />

            <FormItem
              type="text"
              id="LastName"
              label="Last Name"
              value={users.lastName}
            />

            <FormItem
              type="text"
              id="street"
              label="Street"
              value={userData.street}
            />

            <FormItem
              type="text"
              id="city"
              label="City"
              value={userData.city}
            />

            <FormItem
              type="text"
              id="state"
              label="State"
              value={userData.state}
            />

            <FormItem
              type="text"
              id="zip"
              label="Zip"
              value={userData.zip}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
