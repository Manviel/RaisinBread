import React from "react";

import "./Progress.css";

import { ProgressProps } from "../../types";

const Progress = ({ itemsLength }: ProgressProps) => (
  <div className="percent">
    <svg>
      <circle
        cx="70"
        cy="70"
        r="70"
        strokeDasharray={440}
        strokeDashoffset={440 - (440 * itemsLength) / 10}
      ></circle>
    </svg>
    <h3 className="flex center number">{itemsLength}</h3>
  </div>
);

export default Progress;
