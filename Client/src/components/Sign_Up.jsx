import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Sign_up() {
  const [signUpDetails, setsignUpDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    conPassword: "",
  });

  let navigate = useNavigate();

  const getToLogin = () => {
    navigate("/login");
  };

  const onChange = (ele) => {
    setsignUpDetails({
      ...signUpDetails,
      [ele.target.name]: ele.target.value,
    });
  };

  const Submit = async (ele) => {
    ele.preventDefault();

    if (signUpDetails.password === signUpDetails.conPassword) {
      await axios
        .post("http://localhost:5000/api/users", {
          first_name: signUpDetails.first_name,
          last_name: signUpDetails.last_name,
          email: signUpDetails.email,
          password: signUpDetails.password,
        })
        .then((res) => {
          if (res.data.success === 1) {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Re-enter password");
    }
  };
  return (
    <sign_up>
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
                  Already have an account?
                  <strong id="sign_up">
                    {" "}
                    <u onClick={getToLogin}>Sign in</u>
                  </strong>
                </pre>
              </span>
              <div className="Login">
                <form>
                  <input
                    type="text"
                    name="first_name"
                    onChange={onChange}
                    placeholder="Enter your First Name"
                  />
                  <hr />
                  <br />
                  <input
                    type="text"
                    name="last_name"
                    onChange={onChange}
                    placeholder="Enter your Last Name"
                  />
                  <hr />
                  <br />
                  <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    placeholder="Enter your Email Id"
                  />
                  <hr />
                  <br />
                  <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    placeholder="Enter your Password"
                  />
                  <hr />
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your Confirm Password"
                    name="conPassword"
                    onChange={onChange}
                  />
                  <hr />
                  <input
                    type="submit"
                    value="Register"
                    className="btn_click"
                    onClick={Submit}
                  />
                  {/* <span className="other_login">Or Sign In With</span> */}
                  {/* <button type="button">
                    <img
                      className="google_logo"
                      src="./google.png"
                      alt="google-icon"
                    />
                    <pre> Google</pre>
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </sign_up>
  );
}

export default Sign_up;
