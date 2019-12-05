import React, { useContext, useState } from "react";
import YouTube from "react-youtube";

import { DataContext } from "../../utils/context";

import "./Player.css";

const Player = () => {
  const { dispatch } = useContext(DataContext);

  const [canClose, setClose] = useState(false);

  const params = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1
    }
  };

  const handleReady = () => {
    setTimeout(() => {
      setClose(true);
    }, 5000);
  };

  return (
    <article className="modal">
      <div className="flex content">
        {canClose && (
          <span className="close" onClick={() => dispatch({ type: "video" })}>
            &times;
          </span>
        )}
        <YouTube videoId="gmwbHdJLadE" opts={params} onReady={handleReady} />
      </div>
    </article>
  );
};

export default Player;
