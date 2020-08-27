// SideBar select the buttons to show in sidebar
//options: "adminDash", "organizerDash", "eventPages"

function SideBarMenuFilter(pagename) {
  const OrganizationView = [
    {
      key: 1,
      text: "Organizations",
      link: "/organizations",
      icon: "building",
      component: "Item",
    },
    {
      key: 2,
      text: "Events",
      link: "/adminevents",
      icon: "calendar",
      component: "Item",
    },
  ];

  const EventsView = [
    {
      key: 1,
      text: "Events",
      link: "/events",
      icon: "calendar",
      component: "Item",
    },
  ];

  const currentEvent = [
    {
      key: 1,
      text: "Setup Event",
      link: "",
      icon: "arrow",
      component: "ItemSmall",
    },
    {
      key: 2,
      text: "Agenda",
      link: "",
      icon: "book",
      component: "ItemSmall",
    },
    {
      key: 3,
      text: "Associates",
      link: "",
      icon: "organization",
      component: "ItemSmall",
    },
    {
      key: 4,
      text: "Diffusion",
      link: "",
      icon: "envelope",
      component: "Item",
    },
  ];

  if (pagename === "adminDash") {
    return OrganizationView;
  } else if (pagename === "organizerDash") {
    return EventsView;
  } else if (pagename === "eventPages") {
    return currentEvent;
  } else {
    return [];
  }
}

export default SideBarMenuFilter;
