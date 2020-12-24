import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import * as serviceWorker from './serviceWorker';
import ClinicApp from "./App";

ReactDOM.render(
    <ClinicApp/>, document.getElementById('root'));

serviceWorker.unregister();
