import React from "react";

import "./Notification.css";

import { NotifyProps } from "../../types";

const Notification = ({ show, message }: NotifyProps) => {
  const { color, text } = message;

  return (
    <article
      style={{ backgroundColor: color }}
      className={show ? "notify success" : "notify"}
    >
      {text}
    </article>
  );
};

export default Notification;
