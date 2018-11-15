import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
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
store.dispatch(addExpense({ description: "Gas bill", amount: 1000 }));
store.dispatch(addExpense({ description: "rent", amount: 109500 }));

store.dispatch(setTextFilter("gas"));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
