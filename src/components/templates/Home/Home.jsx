import React from "react";

import { Button } from "../../atoms";
import { Header, Footer } from "../../organisms";
import { IconCard } from "../../molecules";

import HeroImg from "../../../assets/images/hero.svg";
import Home1 from "../../../assets/images/home1.svg";
import Home2 from "../../../assets/images/home2.svg";
import Home3 from "../../../assets/images/home3.svg";

export function Home() {
  return (
    <>
      <Header />
      <section className="Home__Hero">
        <div className="Home__Hero__Info">
          <span>EASILY CREATE EVENTS!</span>
          <div className="Home__Hero__Info-BtnContainer">
            <Button text="Create your first event" type="secondary" />
          </div>
        </div>
        <figure className="Home__Hero__Img">
          <img src={HeroImg} alt="Create Easily Event5 " />
        </figure>
      </section>
      <section className="Home__ArticleContainer">
        <article className="Home__Article">
          <div className="Home__Article-Info Home__Article-Left">
            <h2>All your events in one place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <figure className="Home__Article-Img Home__Article-Right">
            <img src={Home1} alt="" />
          </figure>
        </article>
        <article className="Home__Article">
          <div className="Home__Article-Info Home__Article-Right">
            <h2>Build your dream staff</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <figure className="Home__Article-Img Home__Article-Left">
            <img src={Home2} alt="" />
          </figure>
        </article>
        <article className="Home__Article">
          <div className="Home__Article-Info Home__Article-Left">
            <h2>Publish and share it everywhere</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <figure className="Home__Article-Img Home__Article-Right">
            <img src={Home3} alt="" />
          </figure>
        </article>
      </section>
      <section className="Home__Tools">
        <h2>Event5 Tools</h2>
        <div className="Home__Tools-Buttons">
          <IconCard text="Create Events and Organizations" icon="plus" />
          <IconCard text="Create Events and Organizations" icon="plus" />
          <IconCard text="Create Events and Organizations" icon="plus" />
          <IconCard text="Create Events and Organizations" icon="plus" />
          <IconCard text="Create Events and Organizations" icon="plus" />
          <IconCard text="Create Events and Organizations" icon="plus" />
        </div>
      </section>
      <div className="Home__CallToAction">
        <h1>Create your events</h1>
        <div className="Home__CallToAction-Btn">
          <Button text="Create your first event" type="secondary" />
        </div>
      </div>
      <div>LINKS</div>
      <Footer />
    </>
  );
}
