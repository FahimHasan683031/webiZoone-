import Image from 'next/image';
import React, { useRef } from 'react';
import ScrollAnimation from '../common/scrollAnimation/ScrollAnimation';
import "./work.css";

const SingleWork = ({ project, index }) => {
  const containerRef = useRef();

    return (
        <div className={`relative w-full h-full p-5 md:p-0 flex flex-col justify-center items-center lg:justify-normal lg:items-start ${index % 2 !== 0 ? "lg:-mt-20" : ""}`}>
            <ScrollAnimation
                initialPosition="30%"
                finalPosition="0%"
                duration={1}
                delay={0}
                containerRef={containerRef}
                position="y"
            >
                <div
                    ref={containerRef}
                    className='project w-fit overflow-hidden'>
                    <Image
                        src={project?.image}
                        alt={project?.title}
                        width={500}
                        height={700}
                        className={`image md:w-[560px] w-[400px] md:h-[750px] h-[535px]`}
                    />
                </div>

                <div className='absolute bottom-6 md:bottom-12 md:-right-5 md:text-right text-center w-full'>
                    <div className=' overflow-hidden'>
                        <ScrollAnimation
                            initialPosition="100%"
                            finalPosition="0%"
                            duration={1}
                            delay={0.2}
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
