import React, { useState, useContext } from "react";

import { DataContext } from "../utils/context";

const Card = ({ gif, offset, setOffset }) => {
  const { dispatch } = useContext(DataContext);

  const [popup, setPopup] = useState();

  const handleClick = item => {
    setPopup(item.id);

    dispatch({
      type: "update",
      payload: { id: item.id, url: item.images.downsized.url }
    });

    setTimeout(() => {
      setOffset(offset + 3);
    }, 2000);
  };

  return (
    <section className="box">
      <div className="overlay flex" onClick={() => handleClick(gif)}>
        {popup === gif.id ? (
          <img src={gif.images.downsized.url} alt={gif.slug} />
        ) : (
          <h2>Click on me</h2>
        )}
      </div>
    </section>
  );
};

export default Card;
