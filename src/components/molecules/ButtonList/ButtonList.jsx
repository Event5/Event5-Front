import React from "react";
import { Button } from "../../atoms";

//ButtonList needs an objetcs' array in props
// [
//   (btnTranparent = [
//     {
//       color: "first",
//       hover: "second",
//     },
//     {
//       color: "first",
//       hover: "second",
//     },
//   ]),
//   (btnRegulars = [
//     {
//       key: 1,
//       text: "home",
//       type: "primary",
//       color: "first",
//     },
//     {
//       key: 2,
//       text: "about",
//       type: "primary",
//       color: "second",
//     },
//     {
//       key: 3,
//       text: "home",
//       type: "secondary",
//     },
//   ]),
// ];

export function ButtonList({ buttons }) {
  return (
    <h1>test</h1>
    // <ul className="ButtonList">
    //   {buttons.map((item) => {
    //     item.map
    //     return (
    //       <Button
    //         key={item.key}
    //         text={item.text}
    //         type={item.type}
    //         color={item.color}
    //       />
    //     );
    //   })}
    // </ul>
  );
}
