import React from "react";
import imgUrl from "../assets/images/Avatar.png";
import { Avatar } from "../components/atoms/Avatar";
import { TextArea } from "../components/molecules/TextArea"
import { NameTwitter } from "../components/molecules/NameTwitter";

export function SComponents() {
  return (
    <>
      <Avatar imageUrl={imgUrl}/>
      <TextArea />
      <NameTwitter speakerName="Sergio Estrella" twitterUrl="https://twitter.com/djkde"/>
    </>
  );
}