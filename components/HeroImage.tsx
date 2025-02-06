"use client"
import React from 'react'
import Image from 'next/image'

function HeroImage() {
   const  imgWidth = typeof window !== 'undefined' && window.innerWidth>762? 1152:310

  return (
    <div>
        <Image src="/hero.png" alt="hero" width={imgWidth} height={430} className="h-[188px] lg:h-[592px] absolute top-[28.5rem] scale-105 lg:scale-100 left-[2rem] lg:left-[170px] lg:top-[32.8rem] "/>
    </div>
  )
}

export default HeroImage