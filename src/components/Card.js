import React, { useState, useContext } from "react";

import { DataContext } from "../utils/context";

const Card = ({ gif, offset, setOffset, index, chance }) => {
  const { dispatch } = useContext(DataContext);

  const [popup, setPopup] = useState();

  const handleClick = item => {
    if (index === chance) {
      setPopup(item.id);

      dispatch({
        type: "update",
        payload: { id: item.id, url: item.images.downsized.url }
      });

      setTimeout(() => {
        setOffset(offset + 3);
      }, 2000);
    } else {
      setPopup("lost");
    }
  };

  return (
    <section className="box">
      <div className="overlay flex" onClick={() => handleClick(gif)}>
        {popup === gif.id ? (
          <div
            style={{ backgroundImage: `url(${gif.images.downsized.url})` }}
            className="overlay pic"
          />
        ) : (
          <h2>{popup ? "Try again" : "Click on me"}</h2>
        )}
      </div>
    </section>
  );
};

export default Card;
