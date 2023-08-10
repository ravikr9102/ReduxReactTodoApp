import { createStore } from "redux";

function reducer(state = [], action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;