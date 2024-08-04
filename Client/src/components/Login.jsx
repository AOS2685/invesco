import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // to navigate when login successful
  let navigate = useNavigate();

  const login = async (ele) => {
    // console.log(credentials);
    ele.preventDefault();

    await axios
      .post("http://localhost:5000/api/users/login", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      })
      .then((res) => {
        // console.log(res.data.success);
        if (res.data.success === 1) {
          localStorage.setItem("auth-token", res.data.token);
          localStorage.setItem("firstName", res.data.first_name);
          localStorage.setItem("lastName", res.data.last_name);

          // alert("Logged In");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (ele) => {
    setCredentials({
      ...credentials,
      [ele.target.name]: ele.target.value,
    });
  };

  const getToSignIn = () => {
    navigate("/signup");
  };

  return (
    <login>
      <div className="wrapper">
        <div className="left-container">
          <div className="intro">
            <img className="intro_img" src="Introduction.jpg" alt="intro-img" />
            <div className="message">
              <span>
                <pre>Welcome to Invesco</pre>
              </span>
              <span className="small_desc">
                <pre>A Platform for unlisted stocks only</pre>
              </span>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="Form_Box">
            <div className="company_desc">
              <span className="user">
                <pre>Welcome to Invesco</pre>
              </span>
              <span id="valid_user">
                <pre>
                  Not a member?
                  <strong id="sign_up">
                    {" "}
                    <u onClick={getToSignIn}>Sign up now</u>
                  </strong>
                </pre>
              </span>
              <div className="Login">
                <form>
                  <input
                    type="text"
                    placeholder="Enter your Email Id"
                    id="email"
                    name="email"
                    onChange={onChange}
                  />
                  <hr />
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    id="password"
                    name="password"
                    onChange={onChange}
                  />
                  <hr />
                  <input
                    type="submit"
                    value="LOGIN"
                    className="btn_click"
                    onClick={login}
                  />
                  <span className="other_login">Or Sign In With</span>
                  <button type="button" className="Google">
                    <img
                      className="google_logo"
                      src="./google.png"
                      alt="google-icon"
                    />
                    <pre> Google</pre>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </login>
  );
}

export default Login;
