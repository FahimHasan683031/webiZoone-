import Link from 'next/link';
import React from 'react';

const ButtonComponent = ({ text }) => {
    return (
        <div className=''>
            
            <Link href={'/'}>
                <button className="relative overflow-hidden  text-white bg-transparent border-none cursor-pointer group rounded-3xl px-4 py-3 border">
                    <span className="relative z-10 font-bold ">{text} <span className='ml-4'>+</span></span>
                    <div className="size-12 absolute inset-y-0 left-0 bg-gray-700 rounded-full transition-all duration-1000 ease-out transform group-hover:w-full group-hover:left-[104px] group-hover:"></div>
                </button>
            </Link>


        </div>
    );
};

export default ButtonComponent;