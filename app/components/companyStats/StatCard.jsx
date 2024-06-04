import { useEffect, useRef } from "react";
import "./stat.css";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ stat, index }) => {
    const boxRef = useRef(null);

    useEffect(() => {
        let pageTl;

        if (pageTl) {
            pageTl.kill();
        }

        pageTl = gsap.fromTo(
            boxRef.current,
            { y: "120%" },
            {
                y: "0%",
                duration: 0.3,
                delay: 0.4,
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: "top bottom",
                    // end: "top top",
                    scrub: false,
                    toggleActions: "play",
                },
            }
        );

        // Cleanup function
        return () => {
            if (pageTl) {
                pageTl.kill();
            }
        };
    }, []);

    return (
        <div className={`stat ${index !== 5 && "mr-7"} relative overflow-hidden`}>
            <div ref={boxRef} className="group bg-[#FFF] hover:text-white hover:bg-black hover:scale-[0.97] duration-700  transition-all ease-in-out">
                <div className="h-[280px] p-8 flex flex-col justify-between">
                    <h4 className="font-medium ">00{index + 1}</h4>
                    <h3 className="text-2xl font-semibold">{stat?.title}</h3>
                </div>
                <div className="px-8 py-6 border-t border-[#ECECEC]">
                    <h2 className=" font-semibold text-6xl">{stat?.numbers}</h2>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
