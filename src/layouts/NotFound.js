import React from "react";
import { Link } from "react-router-dom";

import ToolForm from "./ToolForm";

const NotFound = () => (
  <div className="flex center col top">
    <h2 className="bot">Not Found</h2>

    <Link to="/">Back to main page</Link>

    <ToolForm />
  </div>
);

export default NotFound;
