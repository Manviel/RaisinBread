import React, { useContext } from "react";

import { DataContext } from "../../utils/context";

import "./Achievement.css";

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
    const chance = Math.round(Math.random() * 1);

    if (chance === 1) {
      for (let i = 0; i < state.selected.length; i++) {
        fetch(
          `http://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_KEY}`
        )
          .then(response => response.json())
          .then(json => {
            const res = json.data;

            dispatch({
              type: "update",
              payload: { id: res.id, url: res.images.downsized.url }
            });
          });
      }
    } else {
      dispatch({ type: "loose" });
    }
  };

  return (
    <section className="flex achive">
      <h2 className="name">Achievement</h2>

      {state.data.length > 0 ? (
        <>
          <article className="wrapper">
            {state.data.map(gif => (
              <img
                className={
                  state.selected.includes(gif.id) ? "img active" : "img"
                }
                key={gif.id}
                src={gif.url}
                alt={gif.id}
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
          <p className="bet">You selected {state.selected.length} items</p>
          <button className="btn" onClick={handleSubmit}>
            Make a bet
          </button>
        </>
      )}
    </section>
  );
};

export default Achievement;
