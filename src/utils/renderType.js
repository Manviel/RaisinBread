import React from "react";

import { Input, Select, TextArea } from "../forms/Field";

const renderType = (arg, values, errors, handleChange) => {
  switch (arg.variation) {
    case "input":
      return (
        <Input
          key={`fc-${arg.id}`}
          name={arg.name}
          type={arg.type}
          onChange={handleChange}
          value={values[arg.name] || ""}
          error={errors[arg.name]}
          required={arg.required}
        />
      );
    case "textarea":
      return (
        <TextArea
          key={`fc-${arg.id}`}
          name={arg.name}
          value={values[arg.name] || ""}
          required={arg.required}
          onChange={handleChange}
          error={errors[arg.name]}
        />
      );
    case "select":
      return (
        <Select
          key={`fc-${arg.id}`}
          name={arg.name}
          required={arg.required}
          value={values[arg.name] || ""}
          onChange={handleChange}
          options={arg.type.split(", ").map(t => ({
            key: t,
            value: t
          }))}
          error={errors[arg.name]}
        />
      );
    default:
      break;
  }
};

export default renderType;
