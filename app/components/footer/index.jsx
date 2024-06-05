"use client"
import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AnimatedButton from '../common/animatedButton';

const FooterComponent = () => {

    const quickLink =  [
          {
            "id": "01",
            "name": "Services"
          },
          {
            "id": "02",
            "name": "Work"
          },
          {
            "id": "03",
            "name": "About us"
          },
          {
            "id": "04",
            "name": "Blog"
          },
          {
            "id": "05",
            "name": "Reviews"
          },
          {
            "id": "06",
            "name": "Contact us"
          },
          {
            "id": "07",
            "name": "Career"
          },
          {
            "id": "08",
            "name": "Template"
          }
        ]
      
      

    return (
        <footer className=' bg-black text-white z-50 p-2'>
            <div className='max-w-7xl mx-auto pt-20 lg:pt-40 md:grid md:grid-cols-2'>
                <div>
                    <Image className='w-16' src={logo} alt='logo' />
                    <p className='mt-10 text-2xl w-1/2'>Making great things in Silicon Valley.</p>

                    <div className='mt-40 flex gap-5'>
                        <FaInstagram className="text-xl my-auto" />
                        <FaFacebookF className="text-xl my-auto" />
                        <FaTwitter className="text-xl my-auto" />
                        <FaLinkedinIn className="text-xl my-auto" />
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='font-extrabold uppercase'>GET IN TOUCH</p>

                    <div className='mt-10'>
                        <AnimatedButton text={"hello@gmail.com"} link={''} textColor={"text-orange-600"} />

                        <br />
                        <AnimatedButton text={"123456789"} link={''} textColor={"text-orange-600"} />

                    </div>
                    {/* <button className='border-b border-orange-600 text-lg mt-5 text-orange-600  hover:border-orange-600 hover:transition duration-2000 transform hover:translate-x-10'>123456789</button> */}

                    <div className='mt-14 lg:mt-28'>
                        <p className='font-extrabold uppercase'>Explore</p>
                        <div className='grid grid-flow-row md:grid-cols-3 lg:grid-cols-5 gap-5 mt-2'>
                            {
                                quickLink?.map(link => <div key={link?.id}> <AnimatedButton text={link?.name} link={''} textColor={"text-orange-600"} /> </div>)
                            }
                        </div>

                        <p className='mt-2 text-gray-400'>5 E Santa Clara St, Ste 1425 San Jose, California 95113</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;