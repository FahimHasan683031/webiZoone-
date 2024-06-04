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
        isScrollUp ? "text-blue-500" : "text-red-500"
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
            start: "top 80%",
            end: "bottom 10%",
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
          start: "top top",
          end: "bottom bottom",
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
      title: "Immerse",
      description:
        "This is where the exertion and proper planning happens and our team will gather inspiration.",
    },
    {
      title: "Plan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.",
    },
    {
      title: "Create",
      description:
        "This is where the exertion and proper planning happens and our team will gather inspiration.",
    },
    {
      title: "Launch",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.",
    },
    {
      title: "Iterate",
      description:
        "This is where the exertion and proper planning happens and our team will gather inspiration.",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="w-[3.5px] bg-[#bc4a32] h-[22px] absolute -top-6 left-[50%]"></div>
        <div className="grid grid-cols-3">
          <FaGgCircle className="text-xl md:text-3xl " />
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-800 text-center">
            Our Process
          </h3>
          <div className="text-right">
            <button className="px-2 md:px-4 py-2 rounded-full bg-[#bc4a32] text-white text-xs md:text-sm">
              GET A QUOTE
            </button>
          </div>
        </div>
        <p className="text-center w-full md:w-4/5 mx-auto mt-7 mb-9 text-[15px] lg:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis
        </p>
      </div>

      <div className="h-[700px] md:h-[750px] lg:h-[850px] max-w-screen-md mx-auto mb-20 mt-32 px-5 lg:px-0">
        <section ref={timelineRef}>
          <div className="relative">
            <motion.div
              className="vertical-line w-[3.5px] bg-[#bc4a32] absolute top-0 left-[50%]"
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
