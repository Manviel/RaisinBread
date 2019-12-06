import React from "react";

import Checkbox from "../../components/Checkbox";

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
    <form
      className="form flex center wrapper"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex col center group">
        <label className="label">Type of control</label>
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
        <label className="label">Name of control</label>
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
            <>
              <label className="label">Type of input</label>
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
            </>
          )}
          {values.variation === "select" && (
            <>
              <label className="label">Write options separated by commas</label>
              <input
                name="type"
                type="text"
                className="control"
                placeholder="Write options separated by commas"
                onChange={handleChange}
                value={values.type || ""}
                required
              />
            </>
          )}
          {errors.type && <span className="helper">{errors.type}</span>}
        </div>
      )}

      <div className="flex col center group">
        <label className="label">Required</label>
        <Checkbox
          name="required"
          checked={values.required || false}
          onChange={handleChange}
        />
      </div>

      {controls.length >= 1 && (
        <div className="flex col center group">
          <label className="label">Select control to communicate</label>
          <select
            name="communicate"
            className="control"
            onChange={handleChange}
            value={values.communicate || ""}
            required
          >
            <option value="">Select control to communicate</option>
            {controls.map(c => (
              <option key={`op-${c.id}`} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <button className="btn top" type="submit">
        Done
      </button>
    </form>
  );
};

export default Form;
