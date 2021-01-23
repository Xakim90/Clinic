import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Link to="/test">To Test page</Link>
        <h1>Это страница еще не готова</h1>
      </>
    );
  }
}

export default Profile;
