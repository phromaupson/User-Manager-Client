import React, { useState } from "react";
import "../style/style.css";
import Navbar from "../components/Navbar";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password, rePassword);
    if (password !== rePassword) {
      console.log("Password not match!");
    } else {
      axios
        .post("http://localhost:8000/api/user/register", {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          setUsername("");
          setPassword("");
          setRePassword("");
          setEmail("");
          console.log(response.data);
        });
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row ml-5">
        <div className=" ml-5 col-md-6">
          <div className="card">
            <form onsubmit="event.preventDefault()" className="box">
              <h1>Register</h1>
              <br />
              <input
                type="text"
                name=""
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />{" "}
              <input
                type="email"
                name=""
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />{" "}
              <input
                type="password"
                name=""
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />{" "}
              <input
                type="password"
                name=""
                placeholder="Re-Password"
                onChange={(e) => setRePassword(e.target.value)}
                value={rePassword}
              />{" "}
              <input
                onClick={handleSubmit}
                type="submit"
                name=""
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
