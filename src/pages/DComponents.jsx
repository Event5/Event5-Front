import React from "react";

import img from "../assets/images/E5Logo-blue.svg";
import { Button, Input } from "../components/atoms";
import { ButtonList, InfoButtons } from "../components/molecules";
import {
  Header,
  EventFooter,
  Footer,
  Login,
  SignUp,
  ConferenceCard,
  SetupEvent,
  SpeakerCard,
} from "../components/organisms";

export function DComponents() {
  // const mock = [
  //   //this array are ButtonAlt Components
  //   [
  //     {
  //       key: 1,
  //       text: "home",
  //       colorText: "third-darkest",
  //       linkTo: "/",
  //     },
  //     {
  //       key: 2,
  //       text: "about",
  //       colorText: "third-darkest",
  //       linkTo="/about",
  //     },
  //     {
  //       key: 3,
  //       text: "Log In",
  //       colorText: "third-darkest",
  //       // linkTo:"/login"
  //     },
  //   ],
  //   // This array are Button Components
  //   [
  //     {
  //       key: 4,
  //       text: "Sing Up",
  //       type: "primaryt",
  //       color: "second",
  //       linkTo: "/signup",
  //     },
  //   ],
  // ];
  return (
    <>
      {/* <ButtonList buttons={mock} /> */}

      {/* <Header />
      <Login /> */}
      {/* <div>
        <SpeakerCard
          speakerPhoto={img}
          speakerName="den"
          speakerRole="react"
          biography="platzi master cohort 3"
        />
      </div> */}
      {/* <SetupEvent
          title="Setup Event"
          description="Lorem ipsum dolor sit amet, consectetur ad"
        /> */}
      {/* <div>
        <ConferenceCard
          sessionTitle="la de hoy"
          date="03/11/2020"
          duration=" 90 min"
          // description="Lorem ipsum dolor sit amet, "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magnis lacus blandit tincidunt. At posuere ornare tristique tincidunt. Arcu faucibus eu sed viverra dictum sagittis, lacus, massa sed. Dolor pulvinar ipsum consequat, in at est nullam diam lacus. Lectus vitae felis amet tortor tortor in proin mauris. Ultrices quisque sit ridiculus ut at ultricies egestas enim amet. Tristique et aliquam dui eleifend lobortis"
          BottomBtn="Dennis Allan Velez Quintanar"
          colortBottonBtn="second"
        />
      </div> */}
      {/* <Header />>
      <div>
        <Login />
      </div> */}
      {/* <div>
        <SignUp />
      </div> */}
      {/* <p>
        <Register />
      </p> */}
      {/* <Header />
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      <br></br>
      <br></br>
      <br></br>
      <EventFooter />; */}
    </>
  );
}
