import Link from 'next/link';
import React from 'react';

const AnimatedButton = ({ text, link, textColor }) => {
    return (
        <div className='relative group inline-block overflow-hidden'>
            <Link href={`${link ? link : '/'} `}>
                <button className={`text-lg mt-2 ${textColor}`}>{text}</button>
            </Link>
            <div className='w-full absolute bottom-0 left-0 border-b border-1 border-orange-600 hover:transition duration-1000 transform group-hover:w-full group-hover:translate-x-full'></div>
        </div>
    );
};

export default AnimatedButton;
