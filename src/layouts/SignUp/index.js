import React from "react";
import { Link } from "react-router-dom";

import { Input } from "../../forms/Field";

import useForm from "../../utils/useForm";
import validate from "./validation";

import "../Login/Login.css";

const SignUp = props => {
  const signUp = () => {
    localStorage.setItem("user", JSON.stringify(values));
    localStorage.setItem("active", JSON.stringify(values));

    props.history.push("/");
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    signUp,
    validate
  );

  return (
    <form className="flex center col login" onSubmit={handleSubmit} noValidate>
      <h1 className="title">Sign Up</h1>
      <Input
        name="firstName"
        type="text"
        onChange={handleChange}
        value={values.firstName || ""}
        error={errors.firstName}
        required
      />
      <Input
        name="lastName"
        type="text"
        onChange={handleChange}
        value={values.lastName || ""}
        error={errors.lastName}
        required
      />
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
        Sign up
      </button>
      <p className="reference">
        Already registered <Link to="login">Log in</Link>
      </p>
    </form>
  );
};

export default SignUp;
