import React from "react";

import logo from "../../../assets/images/E5Logo-blue-small.svg";
import { MenuItem } from "../../molecules/MenuItem";
import { MenuItemSmall } from "../../molecules/MenuItemSmall";
import { Github } from "../../molecules/Github";

export function SidebarMenu() {
  return (
    <aside className="dashboard-menu">
      <img src={logo} alt="Event5's Logo" />
      <div>
        <MenuItem className="" icon="building" text="Organizations" link="/" />
        <MenuItem className="" icon="calendar" text="Events" link="/" />
        <MenuItem className="" icon="calendarNew" text="My Event" link="/" />
        <MenuItemSmall
          className=""
          icon="organizers"
          text="Organizers"
          link="/"
        />
        <MenuItemSmall className="" icon="arrow" text="Setup Event" link="/" />
        <MenuItemSmall className="" icon="book" text="Agenda" link="/" />
        <MenuItemSmall
          className=""
          icon="organization"
          text="Associates"
          link="/"
        />
        <MenuItem className="" icon="envelope" text="Diffusion" link="/" />
      </div>
      <Github />
    </aside>
  );
}
