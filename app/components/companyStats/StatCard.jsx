import { useEffect, useRef } from "react";
import "./stat.css";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ title, numbers, index }) => {
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
        <div className={`stat ${index !== 5 && "lg:mr-5 mr-3"} relative overflow-hidden`}>
            <div ref={boxRef} className="group bg-[#FFF] hover:text-white hover:bg-black hover:scale-[0.97] duration-700  transition-all ease-in-out">
                <div className="xl:h-[280px] h-[200px] lg:h-[220px] md:h-[180px] xl:p-8 p-8 lg:p-6 md:p-4 flex flex-col justify-between">
                    <h4 className="font-medium ">00{index + 1}</h4>
                    <h3 className="lg:text-2xl md:text-lg text-2xl font-semibold">{title}</h3>
                </div>
                <div className="xl:px-8 px-8 lg:px-6 md:px-4 py-6 border-t border-[#ECECEC]">
                    <h2 className=" font-semibold xl:text-6xl text-4xl">{numbers}</h2>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
