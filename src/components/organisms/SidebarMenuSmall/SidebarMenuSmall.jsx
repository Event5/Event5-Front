import React from "react";
import { Link } from "react-router-dom";
import eventIcon from "../../../assets/images/favicon.png";
import { Icon } from "../../atoms";
import SideBarMenuFilter from "../SidebarMenu/SideBarMenuFilter";

export function SidebarMenuSmall({ pagename, type_user }) {
  const buttons = SideBarMenuFilter(pagename, type_user);
  let keyButtons = 0;
  return (
    <div className="SidebarMenuSmall">
      <img src={eventIcon} alt="" />
      <div className="SidebarMenuSmall__Menu">
        {buttons.map((item) => {
          keyButtons = keyButtons + 1;
          if (item.component === "Item") {
            return (
              <Link key={keyButtons} to={item.link}>
                <Icon
                  svg={item.icon}
                  classes="svg-icon__menu"
                  title={item.text}
                />
              </Link>
            );
          } else {
            return (
              <Link key={keyButtons} to={item.link}>
                <Icon
                  svg={item.icon}
                  classes="svg-icon__menu"
                  title={item.text}
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
