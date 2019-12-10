import React from "react";

const renderType = (arg, values, handleChange) => {
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

export default renderType;
