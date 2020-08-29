import React from "react";
import { Link } from "react-router-dom";
import eventIcon from "../../../assets/images/favicon.png";
import { Icon } from "../../atoms";
import SideBarMenuFilter from "../SidebarMenu/SideBarMenuFilter";

export function SidebarMenuSmall({ pagename, type_user }) {
  const buttons = SideBarMenuFilter(pagename, type_user);
  return (
    <div className="SidebarMenuSmall">
      <img src={eventIcon} alt="" />
<<<<<<< HEAD
      <div className="sidebar-menu-small__menu">
        {buttons.map((item) => {
          if (item.component === "Item") {
            return (
              <Link to={item.link}>
                <Icon
                  svg={item.icon}
                  classes="svg-icon__menu"
                  title={item.text}
                />
              </Link>
            );
          } else {
            return (
              <Link to={item.link}>
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
=======
      <nav className="SidebarMenuSmall__Menu">
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
      </nav>
>>>>>>> de98be5ff5a87579264dc22d506684e30ffa1405
    </div>
  );
}
