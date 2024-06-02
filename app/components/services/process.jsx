/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollAnimation from "../common/scrollAnimation/ScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const images = [
    "https://images.playground.com/0d7b373283584cb3a62cd0210f05e17e.jpeg",
    "https://images.playground.com/a86eff58fa3e44888953ebef18302990.jpeg",
    "https://images.playground.com/3caaf388126d4472964a076710a1c858.jpeg",
    "https://images.playground.com/454a16f2a82d4cf4afedff31b14474d6.jpeg",
    "https://images.playground.com/2844a34df511473593393535db7179ca.jpeg",
    "https://images.playground.com/0d7b373283584cb3a62cd0210f05e17e.jpeg",
    "https://images.playground.com/a86eff58fa3e44888953ebef18302990.jpeg",
    "https://images.playground.com/3caaf388126d4472964a076710a1c858.jpeg",
    "https://images.playground.com/454a16f2a82d4cf4afedff31b14474d6.jpeg",
    "https://images.playground.com/2844a34df511473593393535db7179ca.jpeg",
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
  }, [images]);

  const sections = [
    { title: "E-Commerce", tags: ["UX, research", "MVP for startups", "UX, research", "MVP for startups", "UX, research", "MVP for startups",] },
    { title: "Business Website", tags: [] },
    { title: "Social Networks", tags: [] },
    { title: "Medical & healthcare", tags: [] },
    { title: "Forum Website", tags: [] },
    { title: "Portal Website", tags: [] },
    { title: "Membership Website", tags: [] },
    { title: "Entertainment", tags: [] },
    { title: "News", tags: [] },
    { title: "blog", tags: [] },
    { title: "Government Website", tags: [] },
  ];

  return (
    <>
      {/* Title */}
      <div className="mb-16 overflow-hidden mt-56 max-w-screen-xl lg:px-5 xl:px-0 mx-auto">
        <ScrollAnimation
          initialPosition="100%"
          finalPosition="0%"
          duration={1}
          delay={0.7}
          position="y"
        >
          <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-start">
            <h1 className="md:text-6xl text-4xl font-bold">
              Services we offer
            </h1>
            <h1 className="md:text-2xl text-xl font-semibold mt-2">
              Website Design & Development
            </h1>
            <p className="mt-8 text-gray-600 text-lg text-center">
              We build all types of websites. Some websites are listed below
            </p>
          </div>
        </ScrollAnimation>
      </div>
      <div>
        {sections.map((text, index) => (
          <section
            key={index}
            className="parallax-section relative h-screen flex items-center justify-start"
          >
            <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat"></div>
            <div className=" flex items-start justify-start flex-col px-44">
              <h4 className=" font-semibold font-mono text-gray-200">
                WHAT WE DO
              </h4>
              <h2 className=" text-3xl font-bold text-white py-5">
                {text?.title}
              </h2>
              <div className=" flex items-center flex-wrap gap-4">
                {text?.tags?.map((itm, index) => (
                  <div key={index}>
                    <button className=" border-none rounded-md shadow-md text-white bg-[tags] px-5 py-3">
                      {itm}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

