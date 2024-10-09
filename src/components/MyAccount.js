import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function MyAccount() {
  const { user } = useContext(UserContext); // Access the user details from context

  return (
    <section id="myaccount">
      <h2>My Account</h2>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </section>
  );
}

export default MyAccount;
