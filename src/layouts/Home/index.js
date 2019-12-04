import React, { useState, useEffect, useCallback } from "react";

import Card from "../../components/Card";
import Loader from "../../components/Loader";

import Achievement from "../Achievement";

import { getImages } from "../../services/gifs";

import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [disable, setDisable] = useState(false);

  const getData = useCallback(() => {
    getImages(offset).then(json => setData(json.data));
  }, [offset]);

  useEffect(() => {
    getData();
  }, [getData]);

  const chance = Math.round(Math.random() * 2);

  return (
    <>
      <section className="flex home top">
        {data.length > 0 ? (
          data.map((gif, index) => (
            <Card
              key={gif.slug}
              gif={gif}
              offset={offset}
              setOffset={setOffset}
              index={index}
              chance={chance}
              disable={disable}
              setDisable={setDisable}
            />
          ))
        ) : (
          <Loader />
        )}
      </section>

      <Achievement />
    </>
  );
};

export default Home;
