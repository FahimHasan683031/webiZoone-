/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordions",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        ease: "linear",
      },
      onComplete: () => {
        gsap.to(".new-section", { opacity: 1, duration: 1 });
      },
    });

    tl.to(".accordion .content-box", {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });
    tl.to(".accordion", {
      marginBottom: 15,
      stagger: 0.5,
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="py-20 px-5" style={{ scrollBehavior: "smooth" }}>
      <div>
        <div className="spacer"></div>
          <div className="accordion">
            <div className="content-box">
              <img
                className="w-full rounded-md"
                src="https://images.playground.com/1fc3f41321964c80bb4e572ed59349bd.jpeg"
                alt=""
              />
            </div>
          </div>
        <div className="accordions">
          <div className="accordion">
            <div className="content-box">
              <img
                className="w-full rounded-md"
                src="https://images.playground.com/bb2c81b678164565b2f2160e8b298534.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="accordion">
            <div className="content-box">
              <img
                className="w-full rounded-md"
                src="https://images.playground.com/4cdc53828e704ff483c35172f9305e94.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="accordion">
            <div className="content-box">
              <img
                className="w-full rounded-md"
                src="https://images.playground.com/80a692c7db304642af03a6f6cf21c9f8.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="new-section" style={{ opacity: 0 }}>
          <h2>New Section</h2>
          <p>This section appears after the animation completes.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
