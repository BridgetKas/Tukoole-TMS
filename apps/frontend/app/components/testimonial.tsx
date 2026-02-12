'use client'

import  { useState, useEffect } from 'react';
import Image from "next/image";


interface Testimonial {
  name: string;
  position: string;
  photo: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Miyah Millers",
    position: "Marketing Coca Cola",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "Epic has been great at time and cost savings - Automation of repetitive tasks like resume screening, interview scheduling, and reference checks frees up your team to focus on relationship-building and assessment. This  reduced  time-to-hire and lowered recruiting costs.",
  },
  {
    name: "Kato Millers",
    position: "Sales Fendi",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Epic has been great at time and cost savings - Automation of repetitive tasks like resume screening, interview scheduling, and reference checks frees up your team to focus on relationship-building and assessment. This  reduced  time-to-hire and lowered recruiting costs.",

  },
  {
    name: "Miyah Pers",
    position: "HR Audi",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "Epic has been great at time and cost savings - Automation of repetitive tasks like resume screening, interview scheduling, and reference checks frees up your team to focus on relationship-building and assessment. This  reduced  time-to-hire and lowered recruiting costs.",

  },
  {
    name: "Sarah Johnson",
    position: "Marketing Fenty",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    text: "Epic has been great at time and cost savings - Automation of repetitive tasks like resume screening, interview scheduling, and reference checks frees up your team to focus on relationship-building and assessment. This  reduced  time-to-hire and lowered recruiting costs.",

  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 1000);
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center p-4">
        <div>
            <h1 className='leading-tight text-3xl font-semibold p-3 sm:text-4xl md:text-5xl lg:6xl'>It's clear that 
                <br/><span className=' text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-900'>teams</span> love Tukoole </h1>
        </div>
      <div className="relative bg-[#476ce4] text-white rounded-2xl max-w-3xl w-full px-8 md:px-20 py-12 md:py-18">
        <div className="absolute top-4 left-0 w-full h-1  rounded-t-2xl overflow-hidden">
          <div 
            className="h-full bg-white origin-left animate-progress"
            key={currentIndex}
          ></div>
        </div>

        <div className="hidden md:block absolute left-10 top-16 text-white/30 text-5xl">
          <svg 
            className="w-10 h-10" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>
        <div className="hidden md:block absolute right-10 bottom-16 text-white/30 text-5xl">
          <svg 
            className="w-10 h-10 rotate-180" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>

        <p className={`text-center mb-8 text-base md:text-lg leading-relaxed transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          {currentTestimonial.text}
        </p>

        <div className={`flex items-center justify-center gap-4 transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          {/* <img
            src={currentTestimonial.photo}
            alt={currentTestimonial.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
          /> */}
          <Image src={currentTestimonial.photo}  alt={currentTestimonial.name} width={64} height={64}/>
          <div className="text-left">
            <h4 className="font-bold text-lg m-0">{currentTestimonial.name}</h4>
            <p className="text-sm opacity-80 mt-1 mb-0">{currentTestimonial.position}</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-progress {
          animation: progress 10s linear;
        }
      `}</style>
    </div>
  );
};
