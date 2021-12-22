import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/style.css";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        setUsername("");
        setPassword("");
        localStorage.setItem("token", response.data.token);

        toast.success("Login Success", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push("/");
      })
      .catch((error) => {
        // console.log(error.response.data.msg);
        toast.error(error.response.data.msg, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row ml-5">
        <div className=" ml-5 col-md-6">
          <div className="card">
            <form className="box">
              <h1>Login</h1>
              <p className="text-muted">
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
                autoComplete="false"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
              <br />
              <input
                onClick={handleLogin}
                type="submit"
                name=""
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
