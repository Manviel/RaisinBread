import React, { useState } from "react";

import Form from "./Form";

import "../Login/Login.css";
import "./ToolForm.css";

const ToolForm = () => {
  const [controls, setControls] = useState([]);

  const handleType = params => {
    switch (params.variation) {
      case "input":
        return (
          <input
            key={`fc-${params.id}`}
            name={params.name}
            type={params.type}
            className="control"
            placeholder={params.name}
          />
        );
      case "textarea":
        return (
          <textarea
            key={`fc-${params.id}`}
            name={params.name}
            className="control"
            placeholder={params.name}
          ></textarea>
        );
      case "select":
        return (
          <select
            key={`fc-${params.id}`}
            name={params.name}
            className="control"
          >
            {params.type.split(", ").map(f => (
              <option key={`op-${f}${params.id}`} value={f}>
                {f}
              </option>
            ))}
          </select>
        );
      default:
        break;
    }
  };

  return (
    <div className="flex center col login">
      <h1 className="title">Form creator</h1>
      <Form controls={controls} setControls={setControls} />
      {controls.map(item => handleType(item))}
    </div>
  );
};

export default ToolForm;
