import { createStore } from "redux";

// Action Creator - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ setTo = 0 } = {}) => ({
  type: "SET",
  setTo
});

const reseCount = () => ({
  type: "RESET"
});

// Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(action);
      return { count: state.count + action.incrementBy };

    case "DECREMENT":
      return { count: state.count - action.decrementBy };

    case "SET":
      return { count: action.setTo };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => console.log(store.getState()));

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(setCount({ setTo: 100 }));
store.dispatch(reseCount());

export default store;
