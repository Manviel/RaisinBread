import React from "react";
import { Link } from "react-router-dom";

import ToolForm from "./ToolForm";

const NotFound = () => (
  <div className="flex center col top">
    <h2>Not Found</h2>

    <ToolForm />

    <Link to="/">Back to main page</Link>
  </div>
);

export default NotFound;
