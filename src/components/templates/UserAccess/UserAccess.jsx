import React from "react";
import { Login, Register, Header } from "../../organisms";

export function UserAccess({ page, buttons, background, src, alt }) {
  return (
    <>
      <h1>Hol</h1>
      {/* <Header buttons={buttons} />
      <main className={`UserAccess ${background}`}>
        <figure>
          <img src={src} alt={alt} />
        </figure>
        {page === "login" ? <Login /> : <Register />}
      </main> */}
    </>
  );
}
