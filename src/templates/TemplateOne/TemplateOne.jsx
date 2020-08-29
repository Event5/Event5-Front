import React from "react";

import "./src/assets/styles/Main.scss";

import { Countdown } from "./src/components/atoms/Countdown";

const testDate = new Date("August 31, 2020 23:59:59");

export function TemplateOne() {
  return (
    <main className="template-one-body">
      <Countdown eventDate={testDate.toUTCString()}/>
    </main>
  );
}