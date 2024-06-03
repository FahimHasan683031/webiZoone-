/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import ScrollAnimation from "../common/scrollAnimation/ScrollAnimation";

const CommerceTags = [
  "UX, research",
  "MVP for startups",
  "UX, research",
  "MVP for startups",
  "UX, research",
  "MVP for startups",
];

const servicesData = [
  {
    title: "E-Commerce",
    videoSrc: "/ecommerce.mp4",
  },
  {
    title: "Business Website",
    videoSrc: "/business.mp4",
  },
  {
    title: "Social Networks",
    videoSrc: "/Social.mp4",
  },
  {
    title: "Medical & healthcare",
    videoSrc: "/ecommerce.mp4",
  },
  {
    title: "Forum Website",
    videoSrc: "/business.mp4",
  },
  {
    title: "Portal Website",
    videoSrc: "/Social.mp4",
  },
  {
    title: "Membership Website",
    videoSrc: "/ecommerce.mp4",
  },
  {
    title: "Entertainment",
    videoSrc: "/business.mp4",
  },
  {
    title: "News",
    videoSrc: "/Social.mp4",
  },
  {
    title: "Blog",
    videoSrc: "/ecommerce.mp4",
  },
  {
    title: "Government Website",
    videoSrc: "/business.mp4",
  },
];

const ServiceCard = ({ title, videoSrc }) => (
  <div className="steps project-card shadow-lg flex justify-between gap-10 items-start max-md:flex-wrap max-md:flex-col-reverse w-full">
    <div className="relative w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        muted
        loop
      />
      <div className="z-10 relative flex flex-col items-center justify-center gap-5 bg-black bg-opacity-60 p-5 md:p-10 w-full min-h-screen">
        <section className="text-[#f5f1f1] w-full flex">
          <div className="w-full flex-1">
            <h4 className="font-semibold font-mono text-gray-200">
              WHAT WE DO
            </h4>
            <h2 className=" text-xl md:text-3xl font-bold text-white py-5">
              {title}
            </h2>
            <div className="flex items-center flex-wrap gap-2 md:gap-4">
              {CommerceTags.map((tag, index) => (
                <div key={index}>
                  <button className="hover:border rounded-md shadow-md text-white bg-[tags] px-5 py-3">
                    {tag}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex-1"></div>
        </section>
      </div>
    </div>
  </div>
);

export default function Services() {
  return (
    <div>
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
      <div className="flex flex-col gap-10 flex-wrap">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            videoSrc={service.videoSrc}
          />
        ))}
      </div>
    </div>
  );
}
