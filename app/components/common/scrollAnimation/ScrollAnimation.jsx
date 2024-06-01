import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ScrollAnimation = ({ initialPosition = '-100%', finalPosition = '0%', duration = 1, delay = 0, position = 'x', children}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: containerRef?.current,
            animation: gsap.fromTo(
                containerRef?.current,
                { [position]: initialPosition },
                {
                    [position]: finalPosition,
                    duration: duration,
                    delay: delay,
                }
            ),
        });
    }, [containerRef,delay,initialPosition,finalPosition,position,duration])

    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
};

export default ScrollAnimation;
