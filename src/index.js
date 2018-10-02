import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter'
import "../node_modules/normalize.css/normalize.css";
import "./styles/style.css";
import store from "./playground/redux-expensify"

store

ReactDOM.render(<AppRouter/>, document.getElementById("root"));
