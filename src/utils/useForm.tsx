import React, { useState, useEffect, FormEvent } from "react";

import { MetadataObj } from "../types";

const useForm = (callback: any, validate: any, custom?: any) => {
  const [values, setValues] = useState<MetadataObj>({});
  const [errors, setErrors] = useState<MetadataObj>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();

      setIsSubmitting(false);
    }
  }, [errors, callback, isSubmitting]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    setErrors(validate(values, custom));
    setIsSubmitting(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
