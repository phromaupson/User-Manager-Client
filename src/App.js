import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Register from "./page/Register";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Switch>
          <PrivateRoute exact path="/">
            <HomePage />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
