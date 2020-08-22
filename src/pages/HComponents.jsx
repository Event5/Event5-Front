import React from "react";

import "../components/atoms/Icons/Icons.scss";
import Icon from "../components/atoms/Icons/Icon";
import { IconButton } from "../components/atoms/IconButton";
import { MenuItem } from "../components/molecules/MenuItem";

export function HComponents() {
  return (
    <>
      <h1>Héctor's Components</h1>
      <h2>Icons</h2>
      <div>
        <p>
          <Icon svg="facebook" classes="svg-icon" title="Facebook" />
          <span>Facebook</span>
        </p>
        <p>
          <Icon svg="twitter" classes="svg-icon" title="Facebook" />
          <span>twitter</span>
        </p>
        <p>
          <Icon svg="arrow" classes="svg-icon" title="Facebook" />
          <span>arrow</span>
        </p>
        <p>
          <Icon svg="book" classes="svg-icon" title="Facebook" />
          <span>book</span>
        </p>
        <p>
          <Icon svg="building" classes="svg-icon" title="Facebook" />
          <span>building</span>
        </p>
        <p>
          <Icon svg="calendar" classes="svg-icon" title="Facebook" />
          <span>calendar</span>
        </p>
        <p>
          <Icon svg="calendarClock" classes="svg-icon" title="Facebook" />
          <span>calendarClock</span>
        </p>
        <p>
          <Icon svg="calendarNew" classes="svg-icon" title="Facebook" />
          <span>calendarNew</span>
        </p>
        <p>
          <Icon svg="close" classes="svg-icon" title="Facebook" />
          <span>close</span>
        </p>
        <p>
          <Icon svg="collaborators" classes="svg-icon" title="Facebook" />
          <span>collaborators</span>
        </p>
        <p>
          <Icon svg="envelope" classes="svg-icon" title="Facebook" />
          <span>envelope</span>
        </p>
        <p>
          <Icon svg="github" classes="svg-icon" title="Facebook" />
          <span>github</span>
        </p>
        <p>
          <Icon svg="info" classes="svg-icon" title="Facebook" />
          <span>info</span>
        </p>
        <p>
          <Icon svg="microphone" classes="svg-icon" title="Facebook" />
          <span>microphone</span>
        </p>
        <p>
          <Icon svg="notion" classes="svg-icon" title="Facebook" />
          <span>notion</span>
        </p>
        <p>
          <Icon svg="organization" classes="svg-icon" title="Facebook" />
          <span>organization</span>
        </p>
        <p>
          <Icon svg="pencil" classes="svg-icon" title="Facebook" />
          <span>pencil</span>
        </p>
        <p>
          <Icon svg="plane" classes="svg-icon" title="Facebook" />
          <span>plane</span>
        </p>
        <p>
          <Icon svg="plus" classes="svg-icon" title="Facebook" />
          <span>plus</span>
        </p>
      </div>
      <h2>Icon Button</h2>
      <IconButton text="Publish Event" type="primary" color="first" />
      <h2>Menu Item</h2>
      <MenuItem icon="building" text="Organizations" />
    </>
  );
}
