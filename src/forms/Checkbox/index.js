import React from "react";

import "./Checkbox.css";

const Checkbox = ({ name, checked, onChange }) => (
  <>
    <input
      type="checkbox"
      className="theme"
      name={name}
      id={name}
      checked={checked}
      onChange={onChange}
    />
    <label
      htmlFor={name}
      className={checked ? "switch check" : "switch"}
    ></label>
  </>
);

export default Checkbox;
