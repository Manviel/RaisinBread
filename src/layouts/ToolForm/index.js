import React, { useState } from "react";

import Form from "./Form";
import validate from "./custom";
import Ball from "../Ball";

import useForm from "../../utils/useForm";

import renderType from "../../utils/renderType";

import "../Login/Login.css";
import "./ToolForm.css";

const ToolForm = () => {
  const [controls, setControls] = useState([]);

  const revision = () => console.log("Success");

  const { values, errors, handleChange, handleSubmit } = useForm(
    revision,
    validate,
    controls
  );

  const handleRelation = item => {
    if (!errors[item.communicate]) {
      return renderType(item, values, handleChange);
    }
  };

  return (
    <div className="flex center col top">
      <h1 className="title">Form creator</h1>

      <Ball />

      <Form controls={controls} setControls={setControls} />

      {controls.length > 0 && (
        <form className="flex col" onSubmit={handleSubmit} noValidate>
          {controls.map(item =>
            !item.communicate
              ? renderType(item, values, handleChange)
              : handleRelation(item)
          )}

          {Object.keys(errors).map(err => (
            <span key={Math.random()} className="helper">
              Invalid {err}
            </span>
          ))}

          <button className="btn">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ToolForm;
