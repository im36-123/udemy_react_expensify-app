import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "../node_modules/normalize.css/normalize.css";
import "./styles/style.css";

const store = configureStore();

store.subscribe(() => console.log(store.getState()));

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));

store.dispatch(setTextFilter("gas"));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById("root"));
