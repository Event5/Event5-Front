import React from "react";
import { Login } from "../../organisms";
import { HeaderPublic } from "../../molecules";

export function UserAccess({ currentPage, background, src, alt }) {
  return (
    <>
      <HeaderPublic background={background} currentPage={currentPage} />
      <main className={`UserAccess ${background}`}>
        <figure>
          <img src={src} alt={alt} />
        </figure>
        <Login />
      </main>
    </>
  );
}
