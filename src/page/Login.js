import React from "react";
import "../style/style.css";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div class="container-fluid">
      <Navbar />
      <div class="row ml-5">
        <div class=" ml-5 col-md-6">
          <div class="card">
            <form onsubmit="event.preventDefault()" class="box">
              <h1>Login</h1>
              <p class="text-muted">
                {" "}
                Please enter your login and password!
              </p>{" "}
              <input type="text" name="" placeholder="Username" />{" "}
              <input type="password" name="" placeholder="Password" />{" "}
              <a class="forgot text-muted" href="#">
                Forgot password?
              </a>{" "}
              <input type="submit" name="" value="Login" href="#" />
              <div class="col-md-12">
                <ul class="social-network social-circle">
                  <li>
                    <a href="#" class="icoFacebook" title="Facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoTwitter" title="Twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoGoogle" title="Google +">
                      <i class="fab fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
