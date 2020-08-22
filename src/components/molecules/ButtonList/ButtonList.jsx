import React from "react";
import { Button, ButtonAlt } from "../../atoms";

//ButtonList needs an objetcs' array in props
// const but = [
//   {
//     ButtonAlt: [
//       {
//         key: 1,
//         text: "home",
//         colorText: "third-darkest",
//       },
//       {
//         key: 2,
//         text: "about",
//         colorText: "third-darkest",
//       },
//     ],
//   },
//   {
//     Buttons: [
//       {
//         key: 3,
//         text: "home",
//         type: "primary",
//         color: "first",
//       },
//       {
//         key: 4,
//         text: "about",
//         type: "primary",
//         color: "second",
//       },
//     ],
//   },
// ];

export function ButtonList({ buttons }) {
  return (
    <ul className="ButtonList">
      {buttons.map((item) => {
        console.log(item);
        return item.map((btn) => {
          return btn.colorText ? (
            <ButtonAlt
              key={btn.key}
              text={btn.text}
              textcolor={btn.colorText}
            />
          ) : (
            <Button
              key={btn.key}
              text={btn.text}
              type={btn.type}
              color={btn.color}
            />
          );
        });
      })}
    </ul>
  );
}
