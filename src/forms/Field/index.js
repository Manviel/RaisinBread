import React from "react";

import "./Input.css";

export const Input = props => {
  const { name, type, required, value, onChange, error } = props;

  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={name}
        onChange={onChange}
        value={value}
        required={required}
        className="control"
      />
      {error && <span className="helper">{error}</span>}
    </>
  );
};

export const Select = props => {
  const { name, options, required, value, onChange, error } = props;

  return (
    <>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="control"
      >
        <option value="">{name}</option>
        {options.map(o => (
          <option key={Math.random()} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <span className="helper">{error}</span>}
    </>
  );
};

export const TextArea = props => {
  const { name, required, value, onChange, error } = props;

  return (
    <>
      <input
        name={name}
        placeholder={name}
        onChange={onChange}
        value={value}
        required={required}
        className="control"
      />
      {error && <span className="helper">{error}</span>}
    </>
  );
};
