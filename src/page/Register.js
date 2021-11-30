import React from "react";
import "../style/style.css";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <div class="container-fluid">
      <Navbar />
      <div class="row ml-5">
        <div class=" ml-5 col-md-6">
          <div class="card">
            <form onsubmit="event.preventDefault()" class="box">
              <h1>Register</h1>
              <br />
              <input type="text" name="" placeholder="Username" />{" "}
              <input type="password" name="" placeholder="Password" />{" "}
              <input type="password" name="" placeholder="Re-Password" />{" "}
              <input type="submit" name="" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
