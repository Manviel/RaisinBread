import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import { Input } from "../../forms/Field";

import useForm from "../../utils/useForm";
import validate from "./validation";

import "./Login.css";

import { MetadataObj } from "../../types";

const Login = (props: RouteComponentProps) => {
  const [status, setStatus] = useState();

  const login = (values: MetadataObj) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

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
    <form className="flex center col login" onSubmit={handleSubmit} noValidate>
      <h1 className="title">Login</h1>
      {status && <span className="helper top">{status}</span>}
      <Input
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email || ""}
        error={errors.email}
        required
      />
      <Input
        name="password"
        type="password"
        onChange={handleChange}
        value={values.password || ""}
        error={errors.password}
        required
      />
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
