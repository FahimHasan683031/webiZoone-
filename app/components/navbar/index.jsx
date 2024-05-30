"use client";
import { useEffect, useRef, useState } from 'react';
import MagneticEffect from '../common/magneticEffect/magneticEffect';
import AnimatedButton from '../common/animatedButton';
import gsap from 'gsap';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Navbar = () => {

    const navRef = useRef(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [isOpen, setIsOpen] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleOpen = () => {
        setIsOpen(1);
    };

    const handleClose = () => {
        setIsOpen(0);
    };




    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const navItem = [
        {
            "id": 1,
            "title": "Services",
            "link": "/services"
        },
        {
            "id": 2,
            "title": "Work",
            "link": "/work"
        },
        {
            "id": 3,
            "title": "About us",
            "link": "/about-us"
        },
        {
            "id": 4,
            "title": "Blog",
            "link": "/blog"
        },
        {
            "id": 5,
            "title": "Reviews",
            "link": "/reviews"
        },
        {
            "id": 6,
            "title": "Contact us",
            "link": "/contact-us"
        },
        {
            "id": 7,
            "title": "Career",
            "link": "/career"
        },
        {
            "id": 8,
            "title": "Template (Next Update)",
            "link": "/template-next-update"
        }
    ]



    useEffect(() => {
        // Only play the animation if it hasn't been completed yet
        if (!animationCompleted) {
            // Using gsap.fromTo to animate from -100% to 0% and stay at 0% after animation
            gsap.fromTo(
                navRef.current,
                { y: "-100%" },
                {
                    y: "0%",
                    duration: 1,
                    delay: 1,
                    onComplete: () => setAnimationCompleted(true),
                }
            );
        }
    }, [animationCompleted]);


    return (
        <nav className={`w-full fixed top-0 p-5 ${scrollPosition > 1000 ? 'bg-white text-black' : 'bg-transparent text-white'}  duration-1000 z-50`}>
            <div ref={navRef} className=" flex items-center justify-between px-1 py-5">
                <div className=" text-lg font-bold ">Logo</div>
                <div className="flex gap-10">
                    <div>
                        <AnimatedButton text={"LET'S TALK"} textColor={""} font={"font-semibold"} textSize={"text-lg"} borderColor={`${scrollPosition > 1000 ? 'border-black' : 'border-white'}`} />
                    </div>
                    <MagneticEffect>
                        <button
                            onClick={handleOpen}
                            className={`focus:outline-none px-2  rounded-full ${scrollPosition > 1000 ? ' text-white bg-black' : 'bg-transparent text-black bg-white duration-1000'}`}
                        >
                            <svg className={`w-6 h-6 `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </MagneticEffect>
                </div>
            </div>


            <div
                className={`fixed inset-0 bg-white text-white flex flex-col items-end justify-start z-50 ${isOpen === 1 ? 'animate-expand' : isOpen === 0 ? 'animate-collapse' : 'hidden'}  text-black`}

            >
                <div className="w-full flex items-center justify-between  px-1 py-5 mt-5">
                    <div className="black text-lg font-bold ml-10 ">Logo</div>
                    <div className="flex gap-10">
                        <div>
                            <AnimatedButton text={"LET'S TALK"} textColor={"text-black"} font={"font-semibold"} borderColor={"border-black"} />
                        </div>
                        <MagneticEffect>
                            <button
                                onClick={handleClose}
                                className="focus:outline-none px-2 bg-gray-800 rounded-full"
                            >
                                <svg className="size-7  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                                </svg>
                            </button>
                        </MagneticEffect>
                    </div>
                </div>

                <div className="w-full min-h-screen my-auto text-2xl border lg:grid lg:grid-cols-2 gap-5">
                    <div className=' mx-auto mt-2 md:mt-20 flex '>
                        <p className='w-20 h-10 text-sm md:text-lg -rotate-90 font-bold uppercase'>Menu</p>
                        <div>
                            {
                                navItem?.map(item => (
                                    <div key={item?.id} className='mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl font-bold'>
                                        <Link href={item?.link}>
                                            {item?.title}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='my-auto mx-auto'>

                        <div className='p-5'>
                            <AnimatedButton text={"hello@gmail.com"} link={''} textColor={"text-orange-600"} />

                            <br />
                            <AnimatedButton text={"123456789"} link={''} textColor={"text-orange-600"} />

                            <p className='w-2/3 my-5 text-sm'>75 E Santa Clara St, Ste 1425 San Jose, California 95113</p>

                            <div className='mt-10 flex gap-5'>
                                <FaInstagram className="text-xl my-auto" />
                                <FaFacebookF className="text-xl my-auto" />
                                <FaTwitter className="text-xl my-auto" />
                                <FaLinkedinIn className="text-xl my-auto" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
