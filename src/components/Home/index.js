import React, { useState, useEffect, useCallback } from "react";

import Card from "../Card";
import Loader from "../Loader";

import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const getData = useCallback(() => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=cats&api_key=${process.env.REACT_APP_KEY}&limit=3&offset=${offset}`
    )
      .then(response => response.json())
      .then(json => setData(json.data));
  }, [offset]);

  useEffect(() => {
    getData();
  }, [getData]);

  const chance = Math.round(Math.random() * 2);

  return (
    <section className="flex home top">
      {data.length > 0 ? (
        data.map((gif, index) => (
          <Card
            key={gif.id}
            gif={gif}
            offset={offset}
            setOffset={setOffset}
            index={index}
            chance={chance}
          />
        ))
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Home;
