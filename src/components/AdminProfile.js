import React from 'react';

const AdminProfile = ({ user }) => {
  return (
    <div>
      <h2>Welcome to the Admin Profile, {user && user.username}!</h2>
      {/* Add content for the admin profile */}
    </div>
  );
};

export default AdminProfile;
