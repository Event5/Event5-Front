import React from "react";
import { Login, SignUp, Header } from "../../organisms";

export function UserAccess({ headerBackground, page, buttons, src, alt }) {
  return (
    <>
      <Header buttons={buttons} background={headerBackground} />
      <main className={`UserAccess Background${headerBackground}`}>
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
