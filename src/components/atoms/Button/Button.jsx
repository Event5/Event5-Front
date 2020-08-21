import React from "react";

export function Button({ text, caracteristics }) {
  return <button className={`Button ${caracteristics}`}>{text}</button>;
}
