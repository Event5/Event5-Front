import React from "react";

import { Header, HomeHero, Links, CallToAction, Footer } from "../../organisms";
import { IconCard } from "../../molecules";

import Home1 from "../../../assets/images/home1.svg";
import Home2 from "../../../assets/images/home2.svg";
import Home3 from "../../../assets/images/home3.svg";

export function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <section className="Home__ArticleContainer">
        <article className="Home__Article Home__Article-Left">
          <div className="Home__Article-Info ">
            <h2>All your events in one place</h2>
            <p>
            Manage all your events in a dashboard with your organizations. That allow you to have the events in separate and totally independent groups.{" "}
            </p>
          </div>
          <figure className="Home__Article-Img">
            <img src={Home1} alt="Events dashboard illustration" />
          </figure>
        </article>
        <article className="Home__Article Home__Article-Right">
          <div className="Home__Article-Info ">
            <h2>Build your dream staff</h2>
            <p>
            Add the organizers you want for each event and create, manage and carry out your dream event.{" "}
            </p>
          </div>
          <figure className="Home__Article-Img">
            <img src={Home2} alt="Collaborate together illustration" />
          </figure>
        </article>
        <article className="Home__Article Home__Article-Left">
          <div className="Home__Article-Info">
            <h2>Publish and share it everywhere</h2>
            <p>
            Share your event on all social networks with a custom page and url. In addition, you can send information to all participants via email, and an automatic reminder 24 hours before starting.{" "}
            </p>
          </div>
          <figure className="Home__Article-Img ">
            <img src={Home3} alt="Share events illustration" />
          </figure>
        </article>
      </section>
      <section className="Home__Tools">
        <h2>Event5 Tools</h2>
        <div className="Home__Tools-Buttons">
          <IconCard text="Create Events and Organizations" icon="plus" />
          <IconCard text="Add Organizers for your event" icon="collaborators" />
          <IconCard text="Edit events a save for later" icon="pencil" />
          <IconCard
            text="Add Speakers and link their sessions"
            icon="microphone"
          />
          <IconCard text="Agenda tailored to your event" icon="calendarClock" />
          <IconCard text="Email and Social Media difussion" icon="plane" />
        </div>
      </section>
      <CallToAction />
      <Links />
      <Footer />
    </>
  );
}
