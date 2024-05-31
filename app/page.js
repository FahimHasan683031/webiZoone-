"use client";

import BannerComponent from "./components/banner/banner";
import { useEffect } from "react";
import gsap from "gsap";
export default function Home() {
  useEffect(() => {
    const text = document.getElementById('text');
    text.addEventListener('mouseenter', handleMouseEnter);
    text.addEventListener('mouseleave', handleMouseLeave);
    return () => {
        text.removeEventListener('mouseenter', handleMouseEnter);
        text.removeEventListener('mouseleave', handleMouseLeave);
    };
}, []);

const handleMouseEnter = () => {
    const letters = document.querySelectorAll('#text span');

    gsap.fromTo(
        letters,
        { color: 'black' },
        {
            color: 'orange',
            duration: 0,
            ease: 'power2.out',
            stagger: {
                each: 0.05, // Stagger duration for each letter
                from: 'start', // Animation starts from the first letter
            },
        }
    );
};

const handleMouseLeave = () => {
    const letters = document.querySelectorAll('#text span');

    gsap.fromTo(
        letters,
        { color: 'orange' },
        {
            color: 'black',
            duration: 0.5,
            ease: 'power2.out',
            stagger: {
                each: 0.05, // Stagger duration for each letter
                from: 'end', // Animation starts from the last letter
            },
        }
    );
};
  return (
    <main className="">
      <BannerComponent />

      <p id="text" className="text-black transition-colors duration-500 text-center my-20 font-bold text-6xl">
            {Array.from('Aminul Islam Rakib').map((char, index) => (
                <span key={index}>{char}</span>
            ))}
        </p>

      <div className="bg-gray-500 h-96">
        <p>lorem</p>
      </div>
    </main>
  );
}
