import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ initialPosition = '-100%', finalPosition = '0%', initialOpacity = 0, finalOpacity = 1, duration = 1, delay = 0, position = 'x', children, once = true, toggleActions = "play"}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        let pageTl;

        if (pageTl) {
            pageTl.kill();
        }

        pageTl = gsap.fromTo(
            containerRef?.current,
            { [position]: initialPosition , opacity: initialOpacity},
            {
                [position]: finalPosition,
                opacity: finalOpacity,
                duration: duration,
                delay: delay,
                // paused: true, 
                scrollTrigger: {
                    trigger: containerRef?.current,
                    start: "top bottom",
                    // end: "",
                    once: once,
                    scrub: false,
                    toggleActions: toggleActions, // Adjust this as needed
                },
            }
        );

        // Cleanup function
        return () => {
            if (pageTl) {
                pageTl.kill();
            }
        };

       
    }, [delay, initialPosition, finalPosition, position, duration, containerRef, initialOpacity, finalOpacity, once, toggleActions]);

    return (
        <div ref={containerRef} >
            {children}
        </div>
    );
};

export default ScrollAnimation;



