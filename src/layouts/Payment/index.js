import React, { useEffect, useState } from "react";

import { getImageById } from "../../services/gifs";

import "./Payment.css";

const Payment = ({ match }) => {
  const [preview, setPreview] = useState("");
  const [show, setShow] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getImageById(match.params.id).then(json => {
      const res = json.data;

      setPreview(res.images.fixed_height_small.url);
    });
  }, [match.params.id]);

  return (
    <>
      <section className="payment top info">
        <h4 className="author">
          {user.firstName} {user.lastName}
        </h4>

        <label className="credit">Credit card number</label>
        <ul className="flex dark numbers">
          <li>4514</li>
          <li>6188</li>
          <li>1234</li>
          <li>5678</li>
        </ul>

        <label className="code text">CCV</label>
        <p className="ccv text">983</p>

        <label className="exp">Expiration</label>
        <p className="date">January 2018</p>
      </section>

      <section className="panel info">
        <article className={show ? "anime success" : "success"}>
          Success
        </article>
        <div style={{ backgroundImage: `url(${preview})` }} className="cover" />
        <button className="btn" onClick={() => setShow(!show)}>
          Pay now
        </button>
      </section>
    </>
  );
};

export default Payment;
