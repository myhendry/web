import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./modules/redux/store/configureStore";
import Nav from "./modules/nav/Nav";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
