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
      text: "Event",
      link: "/event",
      icon: "arrow",
      component: "Item",
    },
    {
      key: 2,
      text: "Information",
      link: "/event-info",
      icon: "info",
      component: "ItemSmall",
    },
    {
      key: 3,
      text: "Speakers",
      link: "/event-speakers",
      icon: "microphone",
      component: "ItemSmall",
    },
    {
      key: 4,
      text: "Conferences",
      link: "/event-conferences",
      icon: "book",
      component: "ItemSmall",
    },
    {
      key: 5,
      text: "Associates",
      link: "/event-associates",
      icon: "organization",
      component: "ItemSmall",
    },
    {
      key: 6,
      text: "Organizers",
      link: "/event",
      icon: "collaborators",
      component: "ItemSmall",
    },
    {
      key: 7,
      text: "Diffusion",
      link: "/event-diffusion",
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
