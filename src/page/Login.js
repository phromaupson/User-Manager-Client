import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/style.css";
import Navbar from "../components/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ username: username, password: password })
    );
    setUsername("");
    setPassword("");
    history.push("/");
  };

  return (
    <div class="container-fluid">
      <Navbar />
      <div class="row ml-5">
        <div class=" ml-5 col-md-6">
          <div class="card">
            <form onSubmit={handleLogin} class="box">
              <h1>Login</h1>
              <p class="text-muted">
                {" "}
                Please enter your login and password!
              </p>{" "}
              <input
                type="text"
                name=""
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />{" "}
              <input
                type="password"
                name=""
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
              <br />
              <input type="submit" name="" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
