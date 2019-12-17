import React, { useState } from "react";
import { createPortal } from "react-dom";

import Form from "./Form";
import validate from "./custom";
import Ball from "../Ball";

import Notification from "../../components/Notification";

import useForm from "../../utils/useForm";

import renderType from "../../utils/renderType";

import "../Login/Login.css";
import "./ToolForm.css";

import { FormControl } from "../../types";

const ToolForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [controls, setControls] = useState<FormControl[]>([]);

  const revision = () => {
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    revision,
    validate,
    controls
  );

  const handleRelation = (item: FormControl) => {
    if (!errors[item.communicate || ""]) {
      return renderType(item, values, errors, handleChange);
    }
  };

  return (
    <div className="flex center col top">
      <h1 className="title">Form creator</h1>

      <Ball />

      <Form controls={controls} setControls={setControls} />

      {controls.length > 0 && (
        <form className="flex col" onSubmit={handleSubmit} noValidate>
          {controls.map((item: FormControl) =>
            !item.communicate
              ? renderType(item, values, errors, handleChange)
              : handleRelation(item)
          )}

          <button className="btn">Submit</button>
        </form>
      )}

      {createPortal(
        <Notification
          show={submitting}
          message={{ text: "Success", color: "#4cd964" }}
        />,
        document.body
      )}
    </div>
  );
};

export default ToolForm;
