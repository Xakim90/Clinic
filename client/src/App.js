import React from 'react';
import ResponsiveMenu from './components/Menu/ResponsiveMenu';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import store from './redux/redux-store';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter,
  Redirect,
  Route,
  withRouter,
} from 'react-router-dom';
import { getProfileFetch } from './actions/actions';
import { logoutUser } from './actions/actions';
const history = createBrowserHistory();
const location = history.location;

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
      <div className="app-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ResponsiveMenu
                initialized={this.props.initialized}
                logout={this.logout}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
  initialized: state.authReducer.initialized,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
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
