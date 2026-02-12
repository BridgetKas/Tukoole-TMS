'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

interface DropdownItem {
  label: string;
  description?: string;
  icon?: string;
  badge?: string;
}

interface INavLink {
  label: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
  path?: string;
}

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const router = useRouter();

  const navLinks: INavLink[] = [
    {
      label: 'Hire talent',
      hasDropdown: true,
      dropdownItems: [
        { label: 'See all talents', description: 'Connect with top talent vetted by our recruitments team', icon: '👥' },
        { label: 'Developers' },
        { label: 'Designers' },
        { label: 'Marketers' },
        { label: 'eCommerce experts' },
        { label: 'Sales experts' },
        { label: 'Customer support' },
        { label: 'Virtual assistants' },
      ]
    },
    {
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { label: ' Payroll', icon: '👤' },
        { label: 'Health Insurance', icon: '🏥' },
        { label: 'Equipment', icon: '💼' },
      ]
    },
    {
      label: 'About',
      hasDropdown: true,
      dropdownItems: [
        { label: 'About us' },
        { label: 'Our team' },
        { label: 'Careers' },
        { label: 'Blog' },
      ]
    },
    {
      label: 'Pricing',
      hasDropdown: false,
      path: '/pricing'
    }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('Darktheme');
    if (savedTheme === 'isTrue') {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const handleToggle = () => {
    const newDarkValue = !dark;
    setDark(newDarkValue);
    localStorage.setItem('Darktheme', newDarkValue ? 'isTrue' : 'isFalse');
  };

  return (
    <div className="hidden sm:flex sm:flex-col w-full">
      <nav className=" bg-white relative z-50 text-blue-950 transition-colors ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center justify-center lg:gap-2 cursor-pointer">
              <Image 
                src="/TMS.png" 
                alt="Logo" 
                width={80} 
                height={80} 
                className="w-18 lg:w-20"
              />
              <p className="font-bold text-black/90 md:text-xl lg:text-2xl lg:font-extrabold">TUKOOLE</p>
            </Link>

            <div className="flex items-center justify-between space-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.hasDropdown ? (
                    <button className="flex items-center border-0 hover:font-bold transition-opacity py-2 md:text-[16px] font-medium">
                      <span className="lg:text-[18px]">{link.label}</span>
                      <svg 
                        className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link href={link.path || '#'} className="lg:text-[18px] font-medium hover:font-bold transition-all">
                      {link.label}
                    </Link>
                  )}

                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white/90 text-blue-950 rounded-lg shadow-2xl py-4 px-2 min-w-[320px]">
                        <div className="space-y-1">
                          {link.label === 'Hire talent' && (
                            <div className="px-4 py-2 mb-2 font-bold text-blue-950 text-xs uppercase">
                              Talent pool
                            </div>
                          )}
                          {link.dropdownItems?.map((item, index) => (
                            <div key={index} className="px-4 py-2.5 hover:bg-blue-900 hover:text-white  rounded-lg cursor-pointer transition-colors">
                               <div className="flex items-center justify-between ">
                                  <div className="flex items-center space-x-2">
                                    {item.icon && <span>{item.icon}</span>}
                                    <span className="font-medium">{item.label}</span>
                                  </div>
                                  {link.label === 'Services' && <span className="text-blue-600 ">✓</span>}
                               </div>
                               {item.description && <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='flex items-center justify-between gap-2'>
              <button 
                className="hover:bg-blue-500 text-white bg-blue-900 hover:text-black px-5 py-2 rounded-full text-sm font-medium transition-colors lg:text-[18px]" 
                onClick={() => router.push('/contact')}
              >
                Contact us
              </button>
              
              <button className="p-2" onClick={handleToggle} aria-label="Toggle Dark Mode">
                {dark ? <FaRegMoon size={24} /> : <MdOutlineWbSunny size={24} />}
              </button>

            </div>
           
          </div>
        </div>
      </nav>
    </div>
  );
}