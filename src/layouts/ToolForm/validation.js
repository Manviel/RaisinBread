const validate = values => {
  let errors = {};

  const ERROR = "Field is required";

  if (!values.variation) {
    errors.variation = ERROR;
  }

  if (!values.name) {
    errors.name = ERROR;
  }

  if (values.variation !== "textarea" && !values.type) {
    errors.type = ERROR;
  }

  return errors;
};

export default validate;
