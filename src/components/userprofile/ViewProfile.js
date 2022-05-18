import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const ViewProfile = () => (
  <NavLink to="/userProfile">
    <FaUser style={{ color: 'white', height: 30, width: 30 }} />
  </NavLink>
);

export default ViewProfile;
