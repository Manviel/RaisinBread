import React from "react";

import "./Progress.css";

const Progress = ({ items }) => (
  <div className="percent">
    <svg>
      <circle
        cx="70"
        cy="70"
        r="70"
        strokeDasharray={440}
        strokeDashoffset={440 - (440 * items) / 10}
      ></circle>
    </svg>
    <h3 className="number">{items}</h3>
  </div>
);

export default Progress;
