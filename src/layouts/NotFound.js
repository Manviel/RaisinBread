import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex center col top">
    <h2>Not Found</h2>
    <Link to="/">Back to main page</Link>
  </div>
);

export default NotFound;
