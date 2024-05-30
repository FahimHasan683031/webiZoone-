"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SvgAnimation from "./svgAnimation";

const BannerComponent = () => {

    const boxRef = useRef(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        // Only play the animation if it hasn't been completed yet
        if (!animationCompleted) {
            // Using gsap.fromTo to animate from -100% to 0% and stay at 0% after animation
            gsap.fromTo(
                boxRef.current,
                { x: "-100%" },
                {
                    x: "0%",
                    duration: 1,
                    delay: 1,
                    onComplete: () => setAnimationCompleted(true),
                }
            );
        }
    }, [animationCompleted]);

    return (
        <div className="min-h-screen ">
            <div
                ref={boxRef}
                className="animated-box absolute top-0 left-0 w-full min-h-screen bg-black"
            ></div>

            <SvgAnimation />
        </div>
    );
};

export default BannerComponent;