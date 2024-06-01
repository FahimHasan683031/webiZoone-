/* eslint-disable react/no-unescaped-entities */
'use client' // Error components must be Client Components

import { useEffect } from 'react'
import ButtonComponent from './components/common/button/button'


export const generateMetadata = async () => {
    return {
        title: "Error",
        description: "Error page",
    };
};


export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='min-h-screen pt-24 lg:pt-0 lg:grid lg:grid-cols-2 lg:gap-10 bg-gray-900 '>
            <div className='my-auto text-center lg:text-end'>
                <p className=' text-xl  uppercase text-orange-600'>W e ' r e   <span className='ml-5'>s o r r y</span> </p>
                <p className='text-white text-9xl my-10 md:my-0 md:text-[200px] font-extrabold'>Error</p>
                <ButtonComponent text={"Back Home"} />
            </div>
            <div className=" text-gray-400 lg:my-auto text-center md:text-2xl mt-20 ">
                <p>We are extremely sorry for this error.</p>
            </div>

        </div>
    )
}