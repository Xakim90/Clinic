import React, { Component} from 'react';
import { FacebookProvider, Login } from 'react-facebook';

export default class CustomLogin extends Component {
  handleResponse = (data) => {
    console.log(data);
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="123456789">
        <Login
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ loading, handleClick, error, data }) => (
            <span onClick={handleClick}>
              Login via Facebook
              {loading && (
                <span>Loading...</span>
              )}
            </span>
          )}
        </Login>
      </FacebookProvider>
    );
  }
}