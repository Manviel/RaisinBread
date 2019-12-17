import React, { useEffect, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { RouteComponentProps } from "react-router-dom";

import { DataContext } from "../../utils/context";

import Notification from "../../components/Notification";

import { getImageById } from "../../services/gifs";

import "./Payment.css";

import { GiphyType, RouteParams } from "../../types";

const Payment = ({ match }: RouteComponentProps<RouteParams>) => {
  const { state, dispatch } = useContext(DataContext);

  const [preview, setPreview] = useState<GiphyType>();
  const [submitting, setSubmitting] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    color: ""
  });

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    getImageById(match.params.id).then(json => {
      setPreview(json.data);
    });
  }, [match.params.id]);

  const handlePay = (view: GiphyType) => {
    setSubmitting(true);

    if (!state.data.find((p: GiphyType) => p.id === view.id)) {
      setMessage({ text: "Success", color: "#4cd964" });

      dispatch({
        type: "update",
        payload: { id: view.id, url: view.images.downsized.url }
      });
    } else {
      setMessage({ text: "Has already", color: "#FF9500" });
    }

    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

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

      {!submitting && preview && (
        <section className="panel info">
          <div
            style={{
              backgroundImage: `url(${preview.images.fixed_height_small.url})`
            }}
            className="cover"
          />

          <button className="btn" onClick={() => handlePay(preview)}>
            Pay now
          </button>
        </section>
      )}

      {createPortal(
        <Notification show={submitting} message={message} />,
        document.body
      )}
    </>
  );
};

export default Payment;
