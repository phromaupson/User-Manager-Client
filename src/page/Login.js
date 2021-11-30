import React, { useState } from "react";
import "../style/style.css";
import Navbar from "../components/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
    setShow(false);
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
              <button onClick={handleClear}>Clear</button>
            </form>
          </div>
          {show && (
            <p>
              {username} : {password}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
