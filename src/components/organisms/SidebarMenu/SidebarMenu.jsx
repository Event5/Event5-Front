import React from "react";

import logo from "../../../assets/images/E5Logo-blue-small.svg";
import { IconButton } from "../../atoms";
import { MenuItem, MenuItemSmall, Github } from "../../molecules";
import SideBarMenuFilter from "./SideBarMenuFilter";

export function SidebarMenu({ pagename, type_user }) {
  // SideBar select the buttons to show in sidebar -options: "adminDash", "organizerDash", "eventPages"
  const buttons = SideBarMenuFilter(pagename, type_user);
  return (
    <aside className="DashboardMenu">
      <img src={logo} alt="Event5's Logo" />
<<<<<<< HEAD
      <ul>
=======
      <nav>
>>>>>>> de98be5ff5a87579264dc22d506684e30ffa1405
        {buttons.map((item) => {
          if (item.component === "Item") {
            return (
              <MenuItem
                className=""
                key={item.key}
                icon={item.icon}
                text={item.text}
                link={item.link}
              />
            );
          } else {
            return (
              <MenuItemSmall
                className=""
                key={item.key}
                icon={item.icon}
                text={item.text}
                link={item.link}
              />
            );
          }
        })}
<<<<<<< HEAD
      </ul>
=======
      </nav>
>>>>>>> de98be5ff5a87579264dc22d506684e30ffa1405
      <IconButton text="sd" type="primary" color="first" />
      <Github />
    </aside>
  );
}
