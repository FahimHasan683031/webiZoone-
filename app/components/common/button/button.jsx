import Link from 'next/link';
import React from 'react';

const ButtonComponent = ({ text, link, textColor = "white" }) => {
    return (
        <div className=''>
            
            <Link href={`${link ? link : '/'}`}>
                <button className={`relative overflow-hidden  text-${textColor} bg-transparent border-none cursor-pointer group rounded-3xl px-[18px] py-3 border`}>
                    <span className="relative z-10 font-bold my-auto">{text} <span className='ml-4'>+</span></span>
                    <div className={`size-12 absolute inset-y-0 left-0 bg-gray-700 rounded-full transition-all duration-1000 ease-out transform group-hover:w-full group-hover:left-[73%]`}></div>
                </button>
            </Link>


        </div>
    );
};

export default ButtonComponent;