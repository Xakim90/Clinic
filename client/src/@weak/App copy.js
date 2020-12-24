import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Content from '../components/Content/Content';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "../redux/redux-store";
import {initializeApp} from "../redux/app-reducer";
import Login from '../components/Login';
import Signin from '../components/Auth/Signin';
import Signup from '../components/Auth/Signup';
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";


class App extends React.Component {

    componentDidMount() {
        //this.props.fetchData("/api/users");
        this.props.initializeApp();
        
    };
  

    render() {
        return (
            <div className="app-wrapper">
                <Header className="main-header" loginStatus="logout"/>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-3 mt-2">
                            <Navbar patientName="Scott, Michael"/>
                        </div>

                        <div className="col-md-9 mt-2">
                            <Route path='/content' 
                                render={() => <Content/>}/>
                            <Route path='/login'
                           render={() => <Login/>}/>

                            <Route path='/signin'
                           render={() => <Signin/>}/>

                             <Route path="/signup"
                           render = {() => <Signup/>}/>
                        </div>

                    </div>

                </div>


            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons,
        initialized: state.app.initialized
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchData: url => dispatch(personsFetchData(url))
//     };
// };

//export default connect(mapStateToProps, mapDispatchToProps)(App);

const AppContainer = compose(
    withRouter,
    connect (mapStateToProps, {initializeApp})) (App);

const ClinicApp = (props) => {
       return <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
}

export default ClinicApp;
