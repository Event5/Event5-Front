import React from "react";

import { Button } from "../../atoms";

export function HeaderPublic({ background, currentPage }) {
  return (
    <header className={`HeaderPublic ${background}`}>
      {/* <figure>
        <img src="" alt="" />
      </figure> */}
      <ul>
        <Button text="home" caracteristics="BtnTransparent BtnSmall" />
        <Button text="about" caracteristics="BtnTransparent BtnSmall" />
        <Button text={currentPage} caracteristics="BtnTransparent BtnSmall" />
        {/* <figure>
          <img src="" alt="" />
        </figure> */}
      </ul>
    </header>
  );
}
