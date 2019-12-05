import React from "react";

import useForm from "../../utils/useForm";
import validate from "./validation";

const Form = ({ controls, setControls }) => {
  const submit = () => {
    setControls([
      ...controls,
      {
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        ...values
      }
    ]);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  return (
    <form className="form flex center" onSubmit={handleSubmit} noValidate>
      <div className="flex col center group">
        <select
          name="variation"
          className="control"
          onChange={handleChange}
          value={values.variation || ""}
          required
        >
          <option value="">Type of control</option>
          <option value="input">Input</option>
          <option value="textarea">Textarea</option>
          <option value="select">Select</option>
        </select>
        {errors.variation && <span className="helper">{errors.variation}</span>}
      </div>

      <div className="flex col center group">
        <input
          name="name"
          type="text"
          className="control"
          placeholder="Name of control"
          onChange={handleChange}
          value={values.name || ""}
          required
        />
        {errors.name && <span className="helper">{errors.name}</span>}
      </div>

      {values.variation && (
        <div className="flex col center group">
          {values.variation === "input" && (
            <select
              name="type"
              className="control"
              onChange={handleChange}
              value={values.type || ""}
              required
            >
              <option value="">Type of input</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
          )}
          {values.variation === "select" && (
            <input
              name="type"
              type="text"
              className="control"
              placeholder="Write options separated by commas"
              onChange={handleChange}
              value={values.type || ""}
              required
            />
          )}
          {errors.type && <span className="helper">{errors.type}</span>}
        </div>
      )}

      <button className="btn" type="submit">
        Done
      </button>
    </form>
  );
};

export default Form;
