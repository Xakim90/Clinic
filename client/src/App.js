import React from 'react';
import ResponsiveMenu from './components/Menu/ResponsiveMenu';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import store from './redux/redux-store';
import { createBrowserHistory } from 'history';
import { BrowserRouter,withRouter } from 'react-router-dom';
// import { getProfileFetch } from './actions/actions';
import { logoutUser } from './actions/api';
import {usersAPI} from './actions/api'
const history = createBrowserHistory();
// const location = history.location;

class App extends React.Component {
  componentDidMount() {
    this.props.getProfileFetch();
  }
  logout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    this.props.logoutUser();
  };
  render() {
    return (
      <ResponsiveMenu
        initialized={this.props.initialized}
        logout={this.logout}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
  initialized: state.authReducer.initialized,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(usersAPI.getProfileFetch()),
  logoutUser: () => dispatch(logoutUser()),
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

const ClinicApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default ClinicApp;
