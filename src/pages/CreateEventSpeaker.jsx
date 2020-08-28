import React from "react";

import { AppHeader, SaveNext } from "../components/molecules";
import {
  SidebarMenu,
  SectionTitle,
  SpeakerCard,
} from "../components/organisms";
import { Content } from "../components/templates/Content";

export function CreateEventSpeaker() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content>
        {/* <AppHeader btnText="New Organization" /> */}
        <SectionTitle
          title="Your Organizations"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          btnText="New Event"
          btnType="primary"
          btnColor="light"
        />
        <SpeakerCard
          speakerPhoto=""
          speakerName="Stephen Hawking"
          speakerRole="Scientist"
          biography="Biography of Stephen Hawking"
        />
        <SpeakerCard
          speakerPhoto=""
          speakerName="Stephen Hawking"
          speakerRole="Scientist"
          biography="Biography of Stephen Hawking"
        />
        <SpeakerCard
          speakerPhoto=""
          speakerName="Stephen Hawking"
          speakerRole="Scientist"
          biography="Biography of Stephen Hawking"
        />
        <SpeakerCard
          speakerPhoto=""
          speakerName="Stephen Hawking"
          speakerRole="Scientist"
          biography="Biography of Stephen Hawking"
        />
        <SaveNext />
      </Content>
    </main>
  );
}
