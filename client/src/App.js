import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Content from './components/Content/Content';
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import { BrowserRouter, Redirect, Route, withRouter } from "react-router-dom";
import { getProfileFetch } from './actions/actions';
import { logoutUser } from './actions/actions';



class App extends React.Component {
    componentDidMount() {
        this.props.getProfileFetch();
    };

    logout = event => {
        event.preventDefault()
        // Remove the token from localStorage
        localStorage.removeItem("token")
        // Remove the user object from the Redux store
        this.props.logoutUser()
    }
    render() {
        return (
            <div className="app-wrapper">
                <Header className="main-header" initialized={this.props.initialized} logout={this.logout} loginStatus="logout" />

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-3 mt-2">
                            <Navbar initialized={this.props.initialized} currentUser={this.props.currentUser} />
                        </div>

                        <div className="col-md-9 mt-2">
                            
                            <Route path='/' >
                                {!this.props.initialized ? <Redirect to="/signin" /> : <Content />}
                            </Route>

                            <Route exact path='/signin'>
                                {this.props.initialized ? <Redirect to="/content" /> : <Signin />}
                            </Route>

                            <Route exact path='/signup'>
                                {this.props.initialized ? <Redirect to="/content" /> : <Signup />}
                            </Route>

                            <Route exact path="/profile">
                                {!this.props.initialized ? <Redirect to="/signin" /> : <Profile />}
                            </Route>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser,
    initialized: state.authReducer.initialized,
})

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
})


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(App);

const ClinicApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default ClinicApp;
