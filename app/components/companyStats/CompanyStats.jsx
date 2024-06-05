import StatCard from "./StatCard";
import ScrollAnimation from "../common/scrollAnimation/ScrollAnimation";
import video from "@/public/webizone_it.mp4";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger); // Register the plugin

const CompanyStats = () => {
    const containerRef1 = useRef();
    const containerRef2 = useRef();
    const stat = {
        _id: 1,
        title: "Total Awards",
        numbers: "7"
    }

    useEffect(() => {
        // Set initial position of the text
        gsap.set(containerRef1?.current, { x: '15%' });

        // Create a timeline for the animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef1?.current,
                scrub: true,
            },
        });

        // Add animation steps
        tl.to(containerRef1?.current, { x: '-15%', duration: 1 });

        // Cleanup function
        return () => {
            tl.kill();
        };
    }, []);

    useEffect(() => {
        // Set initial position of the text
        gsap.set(containerRef2?.current, { x: '-15%' });

        // Create a timeline for the animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef2?.current,
                scrub: true,
            },
        });

        // Add animation steps
        tl.to(containerRef2?.current, { x: '15%', duration: 1 });

        // Cleanup function
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="w-full min-h-screen py-10 md:py-20 bg-[#B5C0C9] relative overflow-hidden">
            {/* background video for large and medium devices */}
            <div className="absolute w-screen flex top-0 md:w-full h-full justify-center items-center">
                <video
                    className="w-full h-full object-cover z-0"
                    src={video}
                    autoPlay
                    muted
                    loop
                />
            </div>

            {/* for small devices */}
            <div className="md:hidden leading-tight px-10 overflow-hidden">
                <ScrollAnimation
                    initialPosition="100%"
                    finalPosition="0%"
                    initialOpacity={1}
                    finalOpacity={1}
                    duration={1}
                    delay={0.2}
                    position="y"
                >
                    <h1 ref={containerRef1} className="text-5xl font-bold">We are</h1>
                    <h1 ref={containerRef2} className="text-5xl  font-bold text-right">Webizone IT</h1>
                </ScrollAnimation>
            </div>

            {/* stats for large and medium devices*/}
            <div className="md:grid hidden  md:grid-cols-5 xl:px-10 lg:px-6 px-4 pt-12">
                <div>
                    <ScrollAnimation
                        initialPosition="200%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={2.8}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard
                            title={"Total Awards"}
                            numbers={"7"}
                            index={1}
                        ></StatCard>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation
                        initialPosition="100%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={2.9}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard
                            title={"Years of Services"}
                            numbers={"2+"}
                            index={2}
                        ></StatCard>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation
                        initialPosition="0%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={2.9}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard
                            title={"Location"}
                            numbers={"1"}
                            index={3}
                        ></StatCard>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation
                        initialPosition="-100%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={2.9}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard
                            title={"Team members"}
                            numbers={"30+"}
                            index={4}
                        ></StatCard>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation
                        initialPosition="-200%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={2.8}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard
                            title={"Happy Clients"}
                            numbers={"250+"}
                            index={5}
                        ></StatCard>
                    </ScrollAnimation>
                </div>
            </div>
            {/* stats small devices*/}
            <div className="md:hidden grid grid-cols-2 gap-4 px-4 pt-12">
                <div>
                    <StatCard
                        title={"Total Awards"}
                        numbers={"7"}
                        index={1}
                    ></StatCard>
                </div>
                <div>
                    <StatCard
                        title={"Years of Services"}
                        numbers={"4+"}
                        index={2}
                    ></StatCard>
                </div>
                <div>
                    <StatCard
                        title={"Location"}
                        numbers={"3"}
                        index={3}
                    ></StatCard>
                </div>
                <div>
                    <StatCard
                        title={"Team members"}
                        numbers={"40+"}
                        index={4}
                    ></StatCard>
                </div>
                <div>
                    <StatCard
                        title={"Happy Clients"}
                        numbers={"250+"}
                        index={5}
                    ></StatCard>
                </div>
            </div>

            {/* for large and medium devices */}
            <div className="text-white hidden md:block leading-tight px-10 overflow-hidden">
                <ScrollAnimation
                    initialPosition="100%"
                    finalPosition="0%"
                    initialOpacity={1}
                    finalOpacity={1}
                    duration={1}
                    delay={0.2}
                    position="y"
                >
                    <h1 ref={containerRef1} className="xl:text-[170px] lg:text-[120px] text-[100px] font-bold">We are</h1>
                    <h1 ref={containerRef2} className="xl:text-[170px] lg:text-[120px] text-[100px] font-bold text-right">Webizone IT</h1>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default CompanyStats;