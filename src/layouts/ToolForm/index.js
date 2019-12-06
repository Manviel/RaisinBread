import React, { useState } from "react";

import Form from "./Form";

import "../Login/Login.css";
import "./ToolForm.css";

const ToolForm = () => {
  const [controls, setControls] = useState([]);

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
          ></textarea>
        );
      case "select":
        return (
          <select
            key={`fc-${arg.id}`}
            name={arg.name}
            className="control"
            required={arg.required}
          >
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

  const handleSubmit = e => {
    console.log(e.target);

    e.preventDefault();
  };

  return (
    <div className="flex center col login">
      <h1 className="title">Form creator</h1>
      <Form controls={controls} setControls={setControls} />

      {controls.length > 0 && (
        <form className="flex col" onSubmit={handleSubmit}>
          {controls.map(item => handleType(item))}
          <button className="btn">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ToolForm;
