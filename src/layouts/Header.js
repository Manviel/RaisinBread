import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Header = props => {
  const activeUser = localStorage.getItem("active");

  const handleSubmit = () => {
    localStorage.removeItem("active");

    props.history.push("/login");
  };

  return (
    <nav className="flex header wrapper">
      <NavLink exact to="/" className="title" activeClassName="selected">
        Thimbles
      </NavLink>
      <NavLink
        exact
        to="/achievement"
        className="title"
        activeClassName="selected"
      >
        Achievement
      </NavLink>
      <NavLink
        exact
        to="/trending"
        className="title"
        activeClassName="selected"
      >
        Trending
      </NavLink>
      {activeUser && (
        <button className="btn bot" onClick={handleSubmit}>
          Log out
        </button>
      )}
    </nav>
  );
};

export default withRouter(Header);
