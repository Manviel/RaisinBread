import React, { useState, useEffect } from "react";

import Loader from "../../components/Loader";

import { getTrendingImages } from "../../services/gifs";

import "./Trending.css";

const Trending = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getTrendingImages().then(result => {
      setSuggestions(result.data);
    });
  }, []);

  return (
    <section className="flex center wrapper top">
      {suggestions.length > 0 ? (
        suggestions.map(su => (
          <div
            key={su.id}
            style={{ backgroundImage: `url(${su.images.downsized.url})` }}
            className="item"
          />
        ))
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Trending;
