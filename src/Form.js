import React from "react";

const Form = () => {
  return (
    <>
      <div className="wrapper">
        <div class="main">
          <p class="sign" align="center">
            Sign in
          </p>
          <form class="form1">
            <input
              class="username "
              type="text"
              align="center"
              placeholder="Username"
            />
            <input
              class="password"
              type="password"
              align="center"
              placeholder="Password"
            />
            <a class="submit" align="center">
              Sign in
            </a>
            <div class="forgot" align="center">
              <a href="#">Forgot Password ? </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
