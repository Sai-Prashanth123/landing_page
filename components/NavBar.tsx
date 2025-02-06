"use client"
import React, {useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
 const imageWidth=typeof window !== 'undefined' && window.innerWidth>762? 250:150

  return (
    <nav className=" pt-[34px] flex justify-between bg-white items-center px-4 py-4 md:px-8 backdrop-filter backdrop-blur-[8px] bg-opacity-30  fixed right-0 left-0 top-0 z-20">
      <Image 
        src="/logo.svg" 
        alt="Logo" 
        width={imageWidth} 
        height={50} 
        className='lg:ml-[144px] ml-[24px] '
      />
      
      {/* Mobile Menu Toggle */}
      <div className='md:hidden'>
        <button 
          onClick={toggleMenu} 
          className='z-30 relative'
        >
          {isMenuOpen ? null : <Menu size={35} className='mr-[24.4px]'/>}
        </button>
      </div>
      
   
      <center className='hidden lg:block '>
        <div className='flex justify-evenly items-center'>
          <ul className='flex justify-evenly items-center gap-[45px] relative right-[3] '>
            <li className='hover:underline'><Link href={"#features"}>Products</Link></li>
            <li className='hover:underline'><Link href={"/"}>About us</Link></li>
            <li className='hover:underline'><Link href={"/"}>Contact Us</Link></li>
          </ul>
          <div className='flex justify-evenly items-center gap-[14px] mr-[143px] ml-[205px]'>
            <Button variant="outline" className='w-[99px] h-[44px] rounded-[0.93rem] bg-transparent text-[#1B29CB] border border-[#1B29CB] hover:border-[#1B29CB] hover:text-[#1B29CB]'>Signin</Button>
            <Button variant="default" className='w-[99px] h-[44px] rounded-[0.93rem] bg-[#1B29CB] text-white hover:bg-[#1b2acbe9] hover:text-white'>Signup</Button>
          </div>
        </div>
        </center>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 w-full  h-screen bg-white z-20">
          <div className="flex flex-col items-center justify-center h-full">
            <button onClick={toggleMenu} className='absolute right-4 top-4 z-30'>
              <X size={35} className='mr-[24.4px] mt-[34px]'/>
            </button>
            <ul className='flex flex-col relative right-[7rem] text-2xl  items-start gap-[45px] '>
              <li className='hover:underline'><Link href={"#features"}>Products</Link></li>
              <li className='hover:underline'><Link href={"/"}>About us</Link></li>
              <li className='hover:underline'><Link href={"/"}>Contact Us</Link></li>
            </ul>
            <div className='flex justify-center mt-[10rem] items-center gap-[14px] mx-auto relative right-[4.3rem]'>
              <Button variant="outline" className='w-[99px] h-[44px] rounded-[0.93rem] text-[#1B29CB] border border-[#1B29CB] hover:border-[#1B29CB] hover:text-[#1B29CB]'>Signin</Button>
              <Button variant="default" className='w-[99px] h-[44px] rounded-[0.93rem] bg-[#1B29CB] text-white hover:bg-[#1B29CB] hover:text-white'>Signup</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar