/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const images = [
    "https://images.playground.com/0d7b373283584cb3a62cd0210f05e17e.jpeg",
    "https://images.playground.com/a86eff58fa3e44888953ebef18302990.jpeg",
    "https://images.playground.com/3caaf388126d4472964a076710a1c858.jpeg",
    "https://images.playground.com/454a16f2a82d4cf4afedff31b14474d6.jpeg",
    "https://images.playground.com/2844a34df511473593393535db7179ca.jpeg",
  ];

  useEffect(() => {
    let getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray(".parallax-section").forEach((section, i) => {
      const bg = section.querySelector(".bg");
      bg.style.backgroundImage = `url(${images[i]})`;

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i
              ? `50% ${-window.innerHeight * getRatio(section)}px`
              : "50% 0px",
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
  }, [images]);

  const sections = [
    "Simple parallax sections",
    "Hey look, a title",
    "They just keep coming",
    "So smooth though",
    "Nice, right?",
  ];

  return (
    <>
      {sections.map((text, index) => (
        <section
          key={index}
          className="parallax-section relative h-screen flex items-center justify-center"
        >
          <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat"></div>
          <h1 className="text-white text-center text-4xl md:text-6xl font-light shadow-lg">
            {text}
          </h1>
        </section>
      ))}
    </>
  );
}