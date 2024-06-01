import Image from 'next/image';
import React from 'react';
import image1 from '@/public/feature_1.webp'
import AnimatedBox from '../common/animationBox/animationBox';

const FeaturedWorks = () => {
    const projects = [
        {
            _id: 1,
            title: "Cellares",
            description: "Corporate Website",
            image: image1
        },
        {
            _id: 2,
            title: "Lumana",
            description: "Corporate Website",
            image: image1
        },
        {
            _id: 3,
            title: "Ambi Robotics",
            description: "Corporate Website",
            image: image1
        },
        {
            _id: 4,
            title: "Optimal Dynamics",
            description: "Corporate Website",
            image: image1
        },
    ]
    return (
        <div className='px-60 py-52'>
            {/* title */}
            <div className="mb-24 overflow-hidden">
                <AnimatedBox
                    initialPosition="0%"
                    finalPosition="100%"
                    duration={2}
                    delay={2}
                    position="y"
                >
                    <h2 className='text-6xl font-bold'>Featured Work</h2>
                    <p className='mt-8 text-gray-600 text-lg'>Explore some of our latest website projects.</p>
                </AnimatedBox>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10'> 
            {
                projects?.map(project =>
                    <div 
                    key={project?._id}
                    >
                        <Image
                            src={project?.image}
                            alt=''
                            width={500}
                            height={700}
                            className='w-[560px] h-[750px]'
                        ></Image>
                    </div>)
            }
            </div>
        </div>
    );
};

export default FeaturedWorks;