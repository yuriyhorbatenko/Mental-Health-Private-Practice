import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile'><Button variant='success'><i className='fas fa-user-circle text-primary' />Edit Profile  </Button></Link>
    </div>
  );
};

export default DashboardActions;
