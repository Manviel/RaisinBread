import React from "react";

import useTheme from "../../utils/useTheme";

import "./Checkbox.css";

const Checkbox = () => {
  const [theme, setTheme] = useTheme();

  return (
    <section>
      <input
        type="checkbox"
        id="switch"
        className="theme"
        checked={theme === "dark"}
        onChange={setTheme}
      />
      <label htmlFor="switch" className="switch"></label>
    </section>
  );
};

export default Checkbox;
