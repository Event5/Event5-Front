import React from "react";
import { Login, SignUp, Header } from "../../organisms";

export function UserAccess({ page, buttons, background, src, alt }) {
  return (
    <>
      <Header buttons={buttons} />
      <main className={`UserAccess ${background}`}>
        <figure className="UserAccess__Img">
          <img src={src} alt={alt} />
        </figure>
        <div className="UserAccess__Log">
          {page === "login" ? <Login /> : <SignUp />}
        </div>
      </main>
    </>
  );
}
