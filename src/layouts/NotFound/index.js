import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => (
  <div className="flex center col top">
    <h2 className="bot glitchy">Not Found</h2>

    <Link to="/">Back to main page</Link>
    <Link to="/tool" className="top">
      Form generator
    </Link>
  </div>
);

export default NotFound;
