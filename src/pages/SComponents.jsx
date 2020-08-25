import React from "react";
import imgUrl from "../assets/images/Avatar.png";
import { Avatar } from "../components/atoms/Avatar";
import { TextArea } from "../components/molecules/TextArea"
import { NameTwitter } from "../components/molecules/NameTwitter";
import { OrganizersList } from "../components/molecules/OrganizersList";
import { Numeralia } from "../components/molecules/Numeralia";
import { ImageText } from "../components/molecules/ImageText";
import { SimpleEvent } from "../components/organisms/SimpleEvent";

import templateOne from "../assets/images/TemplateHector.png"
import eventImgUrl from "../assets/images/eventimage.png"

export function SComponents() {
  return (
    <>
      <Avatar imageUrl={imgUrl}/>
      <TextArea />
      <NameTwitter speakerName="Sergio Estrella" twitterUrl="https://twitter.com/djkde"/>
      <OrganizersList firstOrganizer="Den Velez" secondOrganizer="Hector Reyes"/>
      <Numeralia participantsType = "Associates" numberOfParticipants = "17"/>
      <ImageText templateName="Template Hector" templateImage={templateOne}/>
      <SimpleEvent eventImage={eventImgUrl} eventName="Event Test" associatesNumber="9" publicAmount="294"/>
    </>
  );
}