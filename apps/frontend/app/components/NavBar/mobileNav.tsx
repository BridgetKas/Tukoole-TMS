'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link' 
import { usePathname } from 'next/navigation'
import Image from 'next/image' 
import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegMoon } from "react-icons/fa"
import { MdOutlineWbSunny } from "react-icons/md"
import { GrClose } from "react-icons/gr"
import styles from './nav.module.css'

const navbar = [
  { label: 'Hire Talent', id: 1, path: '/' },
  { label: "Services", id: 2, path: '/services' },
  { label: "About", id: 3, path: '/about' },
  { label: "Pricing", id: 4, path: '/pricing' }
]

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [dark, setDark] = useState(false)
    const pathname = usePathname()

  //  this runs on inital load
    useEffect(() => {
      const savedTheme = localStorage.getItem('Darktheme')
      if (savedTheme === 'isTrue') {
        setDark(true)
      }
    }, [])

    //  Sync Theme with HTML Class & Body Scroll
    useEffect(() => {
      // Theme toggling
      if (dark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('Darktheme', 'isTrue')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('Darktheme', 'isFalse')
      }

      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }, [dark, isOpen])

    const toggleMenu = () => setIsOpen(!isOpen)
    const handleThemeToggle = () => setDark(!dark)

    return (
      <div className=" bg-white text-blue-950 flex items-center justify-between w-[95%] mx-auto my-3 bg-secondary text-primary rounded-full sm:hidden ">
        <div className='flex items-center justify-center'>
          <Image src='/TMS.png' alt="Logo" width={80} height={40} className='w-20' />
          <p className='text-2xl font-extrabold text-blue-900 '>TUKOOLE</p>
        </div>

        <div>
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <GrClose size={28} /> : <GiHamburgerMenu size={30} />}
          </button>

          <div className={`${styles.mobileDropdown} ${isOpen ? styles.open : ""}`}>
            {navbar.map(item => (
              <Link 
                href={item.path} 
                key={item.id} 
                onClick={() => setIsOpen(false)}
                className={`mt-2 px-2 text-[18px] text-right w-full bg-secondary  hover:font-extrabold ${pathname === item.path ? 'font-bold' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className='flex items-end justify-end w-full pt-3'>
              <button className='p-2' onClick={handleThemeToggle}>
                {dark ? <FaRegMoon size={30} /> : <MdOutlineWbSunny size={30} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}