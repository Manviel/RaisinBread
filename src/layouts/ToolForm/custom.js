const validate = (values, custom) => {
  let errors = {};

  const ERROR = "Field is required";

  custom.map(c =>
    c.required && !values[c.name] ? (errors[c.name] = ERROR) : null
  );

  return errors;
};

export default validate;
