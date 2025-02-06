"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import InfiniteCarousel from "@/components/InfiniteCorousel";

export default function MasonryCarousel() {
  // Detect mobile screens (adjust the breakpoint as needed)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Standard masonry layout for larger screens (all 9 cards)
  const masonryContent = (
    <ResponsiveMasonry columnsCountBreakPoints={{ 450: 1, 750: 2, 900: 3 }}>
      <Masonry>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        <CardSix />
        <CardSeven />
        <CardEight />
        <CardNine />
      </Masonry>
    </ResponsiveMasonry>
  );

  // Mobile layout: 5 cards in a horizontal flex container
  const mobileCards = (
    <div className="flex flex-row gap-4">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
    </div>
  );

  return (
    <>
      {isMobile ? (
        // On mobile, wrap the flex container in the InfiniteCarousel for horizontal infinite scrolling
        <InfiniteCarousel baseVelocity={-50}>
          {mobileCards}
        </InfiniteCarousel>
      ) : (
        // On larger screens, display the full masonry grid
        masonryContent
      )}
    </>
  );
}

function CardOne(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[23rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/alex.svg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Alex R</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
          <mark className='bg-[#1B29CB42]'>Job spring was an absolute lifeline for me.</mark> Their advanced tools not only helped me identify key skills I needed to develop but also connected me with the right opportunities at the perfect time. Thanks to their seamless guidance and support.
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardTwo(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[27.33rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/carlos.svg" alt="carlos" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Carlos</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
          <mark className='bg-[#1B29CB42]'>The tailored resume builder from Job Spring was absolutely phenomenal.</mark> It used advanced AI to create resumes perfectly aligned with job descriptions, highlighting my skills and experience. This personalized approach not only boosted my confidence but also made my applications stand out, significantly increasing my chances of success.
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardThree(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[13.87rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/gab.svg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Jessy</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>OMG! <mark className='bg-[#1B29CB42]'>Game changer</mark></p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardFour(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[16.76rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/jess.svg" alt="jess" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Tim Kagy</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="stars" width={100} height={100}/></div>
        <p className='w-72 my-4'>SO GLAD I SUBSCRIBED&#33;&#33; <mark className='bg-[#1B29CB42]'>Got a job in a week</mark> using the application kit and interview help</p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardFive(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[27rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/maria.svg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Maria G</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
          Switching careers was daunting, but <mark className='bg-[#1B29CB42]'>Job Spring made it seamless,</mark> efficient, and incredibly stress-free. Their tailored resumes and personalized job recommendations helped me transition smoothly into a new field. I&apos;ve never felt more confident and empowered in my professional journey.
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardSix(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[21.89rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/gab.svg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Nivi</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
          I used to dread writing cover letters, but this <mark className='bg-[#1B29CB42]'>AI tool has made it a total breeze,</mark> lifesaver, and true game-changer. It&apos;s like it reads my mind and knows exactly what to say. Highly recommend!
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardSeven(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[22.77rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/jess.svg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>james</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
          Job Spring’s AI-driven resume builder helped me craft a resume that really stood out. I got callbacks from companies I&apos;ve been eyeing for years. <mark className='bg-[#1B29CB42]'>This tool is a game-changer</mark> for anyone job hunting in the tech industry.
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardEight(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[14.07rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/alex.svg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Venkatesh</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>Job applications <mark className='bg-[#1B29CB42]'>simplified</mark></p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardNine(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[25.6rem] text-start p-10'>
      <div className='flex items-center flex-col '>
        <div className='flex items-center gap-[0.78rem] mr-7'>
          <span><Image src="/maria.svg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Alex R</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
          Switching careers was daunting, but <mark className='bg-[#1B29CB42]'>Job Spring made it seamless,</mark> efficient, and incredibly stress-free. Their tailored resumes and personalized job recommendations helped me transition smoothly into a new field. I&apos;ve never felt more confident and empowered in my professional journey.
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}
