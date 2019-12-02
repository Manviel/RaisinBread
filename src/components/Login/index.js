import React, { useState } from "react";
import { Link } from "react-router-dom";

import useForm from "../../utils/useForm";
import validate from "./validation";

import "./Login.css";

const Login = props => {
  const [status, setStatus] = useState();

  const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === values.email &&
      user.password === values.password
    ) {
      localStorage.setItem("active", JSON.stringify(values));

      props.history.push("/");
    } else {
      setStatus("User with such data not found");
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  return (
    <form className="flex col login" onSubmit={handleSubmit} noValidate>
      <h1 className="title">Login</h1>
      {status && <span className="helper top">{status}</span>}
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="control"
        onChange={handleChange}
        value={values.email || ""}
        required
      />
      {errors.email && <span className="helper">{errors.email}</span>}
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="control"
        onChange={handleChange}
        value={values.password || ""}
        required
      />
      {errors.password && <span className="helper">{errors.password}</span>}
      <button type="submit" className="btn">
        Log in
      </button>
      <p className="reference">
        Don't have an account? <Link to="signup">Sign up</Link>
      </p>
    </form>
  );
};

export default Login;
