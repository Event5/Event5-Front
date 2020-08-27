function SideBarMenuFilter(pagename) {
  const OrganizationView = [
    {
      text: "Organizations",
      link: "/organizations",
      icon: "building",
      component: "Item",
    },
    {
      text: "Events",
      link: "/events",
      icon: "calendar",
      component: "Item",
    },
  ];

  const EventsView = [
    {
      text: "Events",
      link: "/events",
      icon: "calendar",
      component: "Item",
    },
  ];

  const currentEvent = [
    {
      text: "Setup Event",
      link: "",
      icon: "arrow",
      component: "ItemSmall",
    },
    {
      text: "Agenda",
      link: "",
      icon: "book",
      component: "ItemSmall",
    },
    {
      text: "Associates",
      link: "",
      icon: "organization",
      component: "ItemSmall",
    },
    {
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
