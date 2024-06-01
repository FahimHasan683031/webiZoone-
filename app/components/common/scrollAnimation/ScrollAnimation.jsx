import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ initialPosition = '-100%', finalPosition = '0%', duration = 1, delay = 0, position = 'x', children}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef?.current,
            { [position]: initialPosition , opacity: 0},
            {
                [position]: finalPosition,
                opacity: 1,
                duration: duration,
                delay: delay,
                // paused: true, 
                scrollTrigger: {
                    trigger: containerRef?.current,
                    start: "top bottom",
                    // end: "",
                    once: true
                },
            }
        );

       
    }, [delay, initialPosition, finalPosition, position, duration, containerRef]);

    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
};

export default ScrollAnimation;
