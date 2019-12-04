import React from "react";
import { Link } from "react-router-dom";

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
    <form className="flex col login" onSubmit={handleSubmit} noValidate>
      <h1 className="title">Sign Up</h1>
      <input
        name="firstName"
        type="text"
        placeholder="First name"
        className="control"
        onChange={handleChange}
        value={values.firstName || ""}
        required
      />
      {errors.firstName && <span className="helper">{errors.firstName}</span>}
      <input
        name="lastName"
        type="text"
        placeholder="Last name"
        className="control"
        onChange={handleChange}
        value={values.lastName || ""}
        required
      />
      {errors.lastName && <span className="helper">{errors.lastName}</span>}
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
        Sign up
      </button>
      <p className="reference">
        Already registered <Link to="login">Log in</Link>
      </p>
    </form>
  );
};

export default SignUp;
