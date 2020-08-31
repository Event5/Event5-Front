// SideBar select the buttons to show in sidebar
//options: "adminDash", "organizerDash", "eventPages"

function SideBarMenuFilter(pagename, user) {
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
      text: "All Events",
      link: "/adminevents",
      icon: "calendar",
      component: "Item",
    },
  ];

  const EventsView = [
    {
      key: 1,
      text: "All Events",
      link: "/adminevents",
      icon: "calendar",
      component: "Item",
    },
  ];

  const Event = [
    {
      key: 3,
      text: "Event",
      link: "/event",
      icon: "arrow",
      component: "Item",
    },
    {
      key: 4,
      text: "Information",
      link: "/event-info",
      icon: "info",
      component: "ItemSmall",
    },
    {
      key: 5,
      text: "Conferences",
      link: "/event-conferences",
      icon: "book",
      component: "ItemSmall",
    },
    {
      key: 6,
      text: "Speakers",
      link: "/event-speakers",
      icon: "microphone",
      component: "ItemSmall",
    },

    {
      key: 7,
      text: "Associates",
      link: "/event-associates",
      icon: "organization",
      component: "ItemSmall",
    },
    {
      key: 8,
      text: "Organizers",
      link: "/event",
      icon: "collaborators",
      component: "ItemSmall",
    },
    {
      key: 9,
      text: "Diffusion",
      link: "/event-diffusion",
      icon: "envelope",
      component: "Item",
    },
    {
      key: 10,
      text: "Template 1",
      link: "/template-one",
      icon: "envelope",
      component: "ItemSmall",
    },
    {
      key: 11,
      text: "Template 2",
      link: "/template-two",
      icon: "envelope",
      component: "ItemSmall",
    },
  ];

  let MainBtns;
  if (user == "admin") {
    MainBtns = OrganizationView;
  } else {
    MainBtns = EventsView;
  }

  const currentEvent = MainBtns.concat(Event);

  if (pagename === "eventPages") {
    return currentEvent;
  } else {
    return MainBtns;
  }
}

export default SideBarMenuFilter;
