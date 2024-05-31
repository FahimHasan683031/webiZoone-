import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedBox = ({ initialPosition = '-100%', finalPosition = '0%', duration = 1, delay = 0, position = 'x', children, isOpen }) => {
    const boxRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                boxRef.current,
                { [position]: initialPosition },
                {
                    [position]: finalPosition,
                    duration: duration,
                    delay: delay,
                }
            );
        } else {
            gsap.fromTo(
                boxRef.current,
                { [position]: finalPosition },
                {
                    [position]: initialPosition,
                    duration: duration,
                    delay: delay,
                }
            );
        }
    }, [isOpen, initialPosition, finalPosition, duration, delay, position]);

    return (
        <div ref={boxRef}>
            {children}
        </div>
    );
};

export default AnimatedBox;
