import React, { useState, useContext } from "react";

import { DataContext } from "../../utils/context";

import "./Card.css";

import { CardProps, GiphyType } from "../../types";

const Card = ({
  gif,
  offset,
  setOffset,
  index,
  chance,
  disable,
  setDisable
}: CardProps) => {
  const { dispatch } = useContext(DataContext);

  const [popup, setPopup] = useState();

  const handleClick = (item: GiphyType) => {
    setDisable(true);

    if (index === chance) {
      setPopup(item.id);

      dispatch({
        type: "update",
        payload: { id: item.id, url: item.images.downsized.url }
      });
    } else {
      setPopup("lost");
    }

    setTimeout(() => {
      setDisable(false);
      setOffset(offset + 3);
    }, 2000);
  };

  return (
    <button
      className="flex center box"
      disabled={disable}
      onClick={() => handleClick(gif)}
    >
      {popup === gif.id ? (
        <div
          style={{ backgroundImage: `url(${gif.images.downsized.url})` }}
          className="overlay pic"
        />
      ) : (
        <h2>{popup ? "Try again" : "Click on me"}</h2>
      )}
    </button>
  );
};

export default Card;
