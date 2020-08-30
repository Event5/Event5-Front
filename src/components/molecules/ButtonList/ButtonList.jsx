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
  let keybtn = 0;
  let keybtn2 = 100;
  return (
    <ul className="ButtonList">
      {buttons.map((item) => {
        keybtn++;
        return item.map((btn) => {
          keybtn2++;
          return btn.colorText ? (
            <li key={keybtn2}>
              <ButtonAlt
                // key={btn.key}
                text={btn.text}
                textcolor={btn.colorText}
                linkTo={btn.linkTo}
              />
            </li>
          ) : (
            <li key={keybtn2}>
              <Button
                // key={btn.key}
                text={btn.text}
                type={btn.type}
                color={btn.color}
                linkTo={btn.linkTo}
              />
            </li>
          );
        });
      })}
    </ul>
  );
}
