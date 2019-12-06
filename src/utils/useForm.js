import { useState, useEffect } from "react";

const useForm = (callback, validate, custom) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();

      setIsSubmitting(false);
    }
  }, [errors, callback, isSubmitting]);

  const handleSubmit = event => {
    if (event) event.preventDefault();

    setErrors(validate(values, custom));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setValues({
      ...values,
      [event.target.name]: value
    });
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
