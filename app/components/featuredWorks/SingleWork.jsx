import Image from 'next/image';
import React, { useRef, useState } from 'react';
import ScrollAnimation from '../common/scrollAnimation/ScrollAnimation';
import { gsap } from 'gsap';
import { Power3 } from 'gsap/gsap-core';

const SingleWork = ({ project, index }) => {
    const containerRef = useRef();

    const handleMouseEnter = () => {
        const tl = gsap.timeline();
        tl.to(containerRef.current, {
            rotationY: -20,
            rotateX: 4,
            rotateY: -4,
            duration: 0.5,
            ease: Power3.easeOut
        }).to(containerRef.current.querySelector('img'), {
            scale: 1.08,
            duration: 1,
            delay: 0,
            ease: Power3.easeOut
        }, '<');

        tl.play();
    };

    const handleMouseLeave = () => {
        const tl = gsap.timeline();

        tl.to(containerRef.current, {
            rotationY: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 1,
            delay: 0,
            ease: Power3.easeOut
        }).to(containerRef.current.querySelector('img'), {
            scale: 1,
            duration: 0.75,
            ease: Power3.easeOut
        }, '<');

        tl.play();
    };

    return (
        <div className={`relative w-full p-5 md:p-0 flex flex-col justify-center items-center lg:justify-normal lg:items-start ${index % 2 !== 0 ? "lg:-mt-20" : ""}`}>
            <ScrollAnimation
                initialPosition="30%"
                finalPosition= "0%"
                duration={1}
                delay={0}
                containerRef={containerRef}
                position="y"
            >
                <div
                    ref={containerRef}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                    className='w-fit overflow-hidden'>
                    <Image
                        src={project?.image}
                        alt={project?.title}
                        width={500}
                        height={700}
                        className={`md:w-[560px] w-[400px] md:h-[750px] h-[535px] duration-500 transition-all hover:scale-105`}
                    />
                </div>

                <div className='absolute bottom-6 md:bottom-12 md:-right-5 md:text-right text-center w-full'>
                    <div className=' overflow-hidden'>
                        <ScrollAnimation
                            initialPosition="100%"
                            finalPosition="0%"
                            duration={1}
                            delay={0.5}
                            position="y">
                            <h2 className='text-3xl font-bold md:tracking-wider tracking-wide'>{project?.title}</h2>
                            <p className='mt-2 text-lg tracking-wide'>{project?.description}</p>
                        </ScrollAnimation>
                    </div>
                </div>

            </ScrollAnimation>
        </div>
    );
};

export default SingleWork;