import React from "react";

import "./Notification.css";

const Notification = ({ show, message }) => {
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
