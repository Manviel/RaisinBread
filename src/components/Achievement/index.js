import React, { useContext } from "react";
import { createPortal } from "react-dom";

import { DataContext } from "../../utils/context";

import Player from "../Player";
import Progress from "../Progress";

import "./Achievement.css";

import { getRandomImage } from "../../services/gifs";

const Achievement = () => {
  const { state, dispatch } = useContext(DataContext);

  const handleSelect = id => {
    if (state.selected.includes(id)) {
      dispatch({ type: "remove", payload: id });
    } else {
      dispatch({ type: "select", payload: id });
    }
  };

  const handleSubmit = () => {
    dispatch({ type: "click" });

    const chance = Math.round(Math.random() * 1);

    if (chance === 1) {
      for (let i = 0; i < state.selected.length; i++) {
        getRandomImage().then(json => {
          const res = json.data;

          dispatch({
            type: "update",
            payload: { id: res.id, url: res.images.downsized.url }
          });
        });
      }
    } else {
      dispatch({ type: "lost", payload: state.selected });
    }
  };

  return (
    <section className="flex col achive top">
      {state.data.length > 0 ? (
        <>
          <article className="wrapper">
            {state.data.map(gif => (
              <div
                key={gif.id}
                style={{ backgroundImage: `url(${gif.url})` }}
                className={
                  state.selected.includes(gif.id) ? "img active" : "img"
                }
                onClick={() => handleSelect(gif.id)}
              />
            ))}
          </article>
          <p className="bet">Select the gif to make bet</p>
        </>
      ) : (
        <p>You have nothing</p>
      )}

      {state.selected.length > 0 && (
        <>
          <Progress items={state.selected.length} />
          <button className="btn top" onClick={handleSubmit}>
            Make a bet
          </button>
        </>
      )}

      {state.clicks === 5 && createPortal(<Player />, document.body)}
    </section>
  );
};

export default Achievement;
