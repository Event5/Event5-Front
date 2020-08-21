import React from "react";
import { Login, Register, Header } from "../../organisms";

export function UserAccess({ page, buttons, background, src, alt }) {
  return (
    <>
      <Header buttons={buttons} />
      <main className={`UserAccess ${background}`}>
        <figure>
          <img src={src} alt={alt} />
        </figure>
        {page === "login" ? <Login /> : <Register />}
      </main>
    </>
  );
}
