import React, { useState } from "react";

import Form from "./Form";
import validate from "./custom";
import Ball from "../Ball";

import useForm from "../../utils/useForm";

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

  const handleType = arg => {
    switch (arg.variation) {
      case "input":
        return (
          <input
            key={`fc-${arg.id}`}
            name={arg.name}
            type={arg.type}
            className="control"
            placeholder={arg.name}
            required={arg.required}
            value={values[arg.name] || ""}
            onChange={handleChange}
          />
        );
      case "textarea":
        return (
          <textarea
            key={`fc-${arg.id}`}
            name={arg.name}
            className="control"
            placeholder={arg.name}
            required={arg.required}
            value={values[arg.name] || ""}
            onChange={handleChange}
          ></textarea>
        );
      case "select":
        return (
          <select
            key={`fc-${arg.id}`}
            name={arg.name}
            className="control"
            required={arg.required}
            value={values[arg.name] || ""}
            onChange={handleChange}
          >
            <option key={`o-${arg.id}`} value="">
              {arg.name}
            </option>
            {arg.type.split(", ").map(o => (
              <option key={`${o}-${arg.id}`} value={o}>
                {o}
              </option>
            ))}
          </select>
        );
      default:
        break;
    }
  };

  const handleRelation = item => {
    if (!errors[item.communicate]) {
      return handleType(item);
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
            !item.communicate ? handleType(item) : handleRelation(item)
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
