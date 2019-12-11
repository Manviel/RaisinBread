import React from "react";

import Checkbox from "../../forms/Checkbox";
import { Input, Select } from "../../forms/Field";

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
        <Select
          label="Type of control"
          name="variation"
          onChange={handleChange}
          value={values.variation || ""}
          error={errors.variation}
          options={[
            {
              key: "Input",
              value: "input"
            },
            {
              key: "Textarea",
              value: "textarea"
            },
            {
              key: "Select",
              value: "select"
            }
          ]}
          required
        />
      </div>

      <div className="flex col center group">
        <Input
          label="Name of control"
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name || ""}
          error={errors.name}
          required
        />
      </div>

      {values.variation && (
        <div className="flex col center group">
          {values.variation === "input" && (
            <Select
              label="Type of input"
              name="type"
              onChange={handleChange}
              value={values.type || ""}
              error={errors.type}
              options={[
                {
                  key: "Text",
                  value: "text"
                },
                {
                  key: "Number",
                  value: "number"
                }
              ]}
              required
            />
          )}
          {values.variation === "select" && (
            <Input
              label="Write options separated by commas"
              name="type"
              type="text"
              onChange={handleChange}
              value={values.type || ""}
              error={errors.type}
              required
            />
          )}
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
          <Select
            label="Select control to communicate"
            name="communicate"
            onChange={handleChange}
            value={values.communicate || ""}
            error={errors.communicate}
            options={controls.map(c => ({
              key: c.name,
              value: c.name
            }))}
            required
          />
        </div>
      )}

      <button className="btn top" type="submit">
        Done
      </button>
    </form>
  );
};

export default Form;
