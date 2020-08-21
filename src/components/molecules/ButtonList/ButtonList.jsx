import React from "react";
import { Button } from "../../atoms";

export function ButtonList({ buttons }) {
  return (
    <ul>
      {buttons.map((item) => {
        return (
          <Button
            key={item.key}
            text={item.text}
            caracteristics={item.caracteristics}
          />
        );
      })}
    </ul>
  );
}
