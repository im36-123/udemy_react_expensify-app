import { createStore } from "redux";

const store = createStore((state = { count: 0 }) => {
  console.log("101");
  return state;
});

console.log(store.getState());

export default store;
