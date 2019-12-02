const validate = values => {
  let errors = {};

  const ERROR = "Field is required";

  if (!values.firstName) {
    errors.firstName = ERROR;
  }

  if (!values.lastName) {
    errors.lastName = ERROR;
  }

  if (!values.email) {
    errors.email = ERROR;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = ERROR;
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 or more characters";
  }

  return errors;
};

export default validate;
