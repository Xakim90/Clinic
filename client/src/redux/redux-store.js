import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./auth";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    form: formReducer,
    //app: appReducer,
    authReducer: authReducer
});
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare) // redux-dev tools o'rnatilgan store
    // const store = createStore(reducer, /* preloadedState, */ compose(

));
// let store = createStore(reducers, applyMiddleware(thunkMiddleWare)); o'zimiz yozgan store
window._store_ = store;

export default store;

