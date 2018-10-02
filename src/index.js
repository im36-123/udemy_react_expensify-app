import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter'
import "../node_modules/normalize.css/normalize.css";
import "./styles/style.css";
import redux from "./playground/redux-101"

redux

ReactDOM.render(<AppRouter/>, document.getElementById("root"));
