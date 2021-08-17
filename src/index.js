import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import myReducer from "./reducers";
import { Provider } from "react-redux";

//Create Store
const store = createStore(myReducer);

//actions

//reducers

//dispatch

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
