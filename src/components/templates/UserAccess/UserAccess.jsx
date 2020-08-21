import React from "react";
import { Login, Register } from "../../organisms";

export function UserAccess({ page, currentPage, background, src, alt }) {
  return (
    <>
      <main className={`UserAccess ${background}`}>
        <figure>
          <img src={src} alt={alt} />
        </figure>
        {page === "login" ? <Login /> : <Register />}
      </main>
    </>
  );
}
