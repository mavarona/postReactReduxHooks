import React from "react";
import Routes from "./routes";

import NavBar from "./components/NavBar";

import Store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <NavBar />
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
