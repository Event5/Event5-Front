import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../organisms";

export function NotFound({ image }) {
  return (
    <>
      <Header background="second" />
      <div className="NotFound">
        <figure className="NotFound__Img">
          <img src={image} alt="Not Found image" />
        </figure>
        <h1>Oops!</h1>
        <p>Something went wrong</p>
        <Link className="NotFound__Link" to="/">
          <span>Return to homepage</span>
        </Link>
      </div>
    </>
  );
}
