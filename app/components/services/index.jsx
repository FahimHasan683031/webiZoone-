/* eslint-disable @next/next/no-img-element */
"use client";
// import styles from "./services.css";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    let getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray(".parallax-section").forEach((section, i) => {
      const bg = section.querySelector(".bg");
      bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);

  const sections = [
    "Simple parallax sections",
    "Hey look, a title",
    "They just keep coming",
    "So smooth though",
    "Nice, right?",
  ];

  return (
    <>
      <header className="text-center my-6">
        <a href="https://greensock.com/scrolltrigger">
          <img
            className="mx-auto"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width="200"
            height="64"
            alt="GreenSock ScrollTrigger Logo"
          />
        </a>
      </header>
      {sections.map((text, index) => (
        <section
          key={index}
          className="parallax-section relative h-screen flex items-center justify-center"
        >
          <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat"></div>
          <h1 className="text-white text-4xl md:text-6xl font-light shadow-lg">
            {text}
          </h1>
        </section>
      ))}
    </>
  );
}
