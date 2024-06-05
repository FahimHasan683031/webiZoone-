"use client";
import { useEffect, useRef, useState } from "react";
import { FaGgCircle, FaRegCircle } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({ title, description, index, isScrollUp }) => (
  <div className="relative">
    <FaRegCircle
      className={`absolute left-[48.5%] md:left-[49.2%] top-10 md:top-[70px] bg-white ${
        isScrollUp ? "text-[#c21a80]" : "text-[#c21a80]"
      }`}
    />
    <div className="grid grid-cols-2 gap-16 md:gap-32 lg:gap-40 pt-8 md:pt-16">
      <div>
        <p className="text-right text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
          {title}
        </p>
      </div>
      <div>
        <p className="text-xs md:text-sm lg:text-base text-gray-700">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const WorkingProcess = () => {
  const timelineRef = useRef(null);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsScrollUp(false);
    } else {
      setIsScrollUp(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const items = gsap.utils.toArray(".timeline-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 70%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      ".vertical-line",
      { height: 0 },
      {
        height: "100%",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 90%",
          end: "bottom 80%",
          scrub: true,
          onUpdate: (self) => {
            controls.start({ height: `${self.progress * 100}%` });
          },
        },
      }
    );
  }, [controls]);

  const timelineData = [
    {
      title: "Business Strategy",
      description:
        "Business Goals, Mission, Target market, Value proposition, SWOT analysis, Business, Model canvas.",
    },
    {
      title: "Research",
      description:
        "Competitive Analysis, User Interviews, Journey Mapping, Value Proposition.",
    },
    {
      title: "Define",
      description:
        "UX Strategy, Information Architecture, User Flows, Visual Direction.",
    },
    {
      title: "Plan",
      description:
        "Scope breakdown activities, project brief, team allocation, and project kickoff.",
    },
    {
      title: "Create",
      description:
        "This is where the exertion and proper planning happens and our team will gather inspiration to create an incredible product for you!",
    },
    {
      title: "Evaluate",
      description:
        "Usability Testing, User Surveys",
    },
    {
      title: "Launch",
      description:
        "Final deliverable with documentation and project closure activities.",
    },
  ];

  return (
    <>
      <div className="relative px-5 max-w-screen-lg mx-auto mt-32">
        <div className="w-[3.5px] bg-[#c21a80] h-[22px] absolute -top-6 left-[50%]"></div>
        <div className="grid grid-cols-3 ">
          <FaGgCircle className="text-xl md:text-3xl " />
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-800 text-center">
            Our Process
          </h3>
          <div className="text-right">
            <button className="px-2 md:px-4 py-2 rounded-full bg-gradient-to-r from-[#322047] to-[#c21a80] text-white text-xs md:text-sm">
              GET A QUOTE
            </button>
          </div>
        </div>
        <p className="text-center w-full md:w-4/5 mx-auto mt-7 mb-9 text-[15px] lg:text-base ">
        At the heart of our operations lies a comprehensive business strategy. We start with extensive research and clear definition of objectives, meticulously planning each step. Through iterative creation, evaluation, and refinement, we ensure a flawless launch of our products or services, setting the stage for success in the market.
        </p>
      </div>

      <div className="h-[630px] md:h-[790px] lg:h-[950px] max-w-screen-md mx-auto mb-10 mt-12 px-5 lg:px-0">
        <section ref={timelineRef}>
          <div className="relative">
          <div className="w-[3.5px] bg-gray-300 h-[620px] md:h-[770px] lg:h-[860px] absolute  left-[50%]"></div>
            <motion.div
              className="vertical-line w-[3.5px] bg-[#c21a80] absolute top-0 left-[50%]"
              initial={{ height: 0 }}
              animate={controls}
            />
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 2 }}
              >
                <TimelineItem
                  title={item.title}
                  description={item.description}
                  index={index}
                  isScrollUp={isScrollUp}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkingProcess;
