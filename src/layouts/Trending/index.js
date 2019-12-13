import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Table from "../Table";

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
          <Link key={su.id} to={`/pay/${su.id}`}>
            <div
              style={{ backgroundImage: `url(${su.images.downsized.url})` }}
              className="item"
            />
          </Link>
        ))
      ) : (
        <Loader />
      )}

      <Table />
    </section>
  );
};

export default Trending;
