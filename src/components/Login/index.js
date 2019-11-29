import React from "react";

import useForm from "../../utils/useForm";
import validate from "./validation";

import "./Login.css";

const Login = props => {
  const login = () => {
    localStorage.setItem("user", JSON.stringify(values));

    props.history.push("/");
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  return (
    <form className="flex login" onSubmit={handleSubmit} noValidate>
      <h1 className="title">Login</h1>
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
    </form>
  );
};

export default Login;
