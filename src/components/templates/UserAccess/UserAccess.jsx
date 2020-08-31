import React from "react";
import { Header } from "../../organisms";
import Login from "../../organisms/Login/Login";
import SignUp from "../../organisms/SignUp/SignUp";

function UserAccess(props) {
  const { headerBackground, page, buttons, src, alt } = props;

  return (
    <>
      <Header buttons={buttons} background={headerBackground} />
      <main className="UserAccess">
        <figure className="UserAccess__Img">
          <img src={src} alt={alt} />
        </figure>
        <div className="UserAccess__Log">
          {page === "login" ? <Login /> : <SignUp />}
        </div>
      </main>
      <div
        className={`UserAccess__Background Background${headerBackground}`}
      ></div>
    </>
  );
}

export default UserAccess;
