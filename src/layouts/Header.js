import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Header = props => {
  const activeUser = localStorage.getItem("active");

  const handleSubmit = () => {
    localStorage.removeItem("active");

    props.history.push("/login");
  };

  return (
    <nav className="header">
      <Link to="/" className="title">
        Thimbles
      </Link>
      <Link to="/achievement" className="title">
        Achievement
      </Link>
      <Link to="/trending" className="title">
        Trending
      </Link>
      {activeUser && (
        <button className="btn" onClick={handleSubmit}>
          Log out
        </button>
      )}
    </nav>
  );
};

export default withRouter(Header);
