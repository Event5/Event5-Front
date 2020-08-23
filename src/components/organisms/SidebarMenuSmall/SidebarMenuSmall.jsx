import React from "react";

import eventIcon from "../../../assets/images/favicon.png";
import { Icon } from "../../atoms/Icons/Icon";

export function SidebarMenuSmall() {
  return (
    <div className="sidebar-menu-small__container">
      <img src={eventIcon} alt="" />
      <div className="sidebar-menu-small__menu">
        <Icon svg="building" classes="svg-icon__menu" title="building" />
        <Icon svg="calendar" classes="svg-icon__menu" title="calendar" />
        <Icon svg="calendarNew" classes="svg-icon__menu" title="calendarNew" />
        <Icon svg="arrow" classes="svg-icon__menu--small" title="arrow" />
        <Icon svg="info" classes="svg-icon__menu--small" title="info" />
        <Icon svg="book" classes="svg-icon__menu--small" title="book" />
        <Icon
          svg="organization"
          classes="svg-icon__menu--small"
          title="organization"
        />
        <Icon svg="envelope" classes="svg-icon__menu" title="envelope" />
      </div>
    </div>
  );
}
