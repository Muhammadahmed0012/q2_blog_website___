import React from 'react'
import Image from 'next/image'
import About_img from "../../../../public/images/blog_abou_img.svg"
import Card3 from '@/components/card3'
import Card2 from '@/components/card2'
export default function About() {
  return (
    <div className='overflow-hidden'>
    <div className='flex flex-col items-center justify-center overflow-hidden space-y-7 mt-24'>
      <span className='text-[15px] font-light opacity-75'>ABOUT US</span>
      <h2 className='text-3xl font-semibold sm:w-[30rem] w:[26rem] text-center'>Creative Blog Writting and publishing site</h2>
      <p className='md:w-[50rem] sm:w-[40rem] w-[21rem] text-[15px] font-light opacity-75 text-center '>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
    <Image src={About_img} alt='about_img'  className='mx-auto sm:h-[508px] sm:w-[1000px]  w-[21rem] '/>
    </div>

    <div className='flex md:flex-row flex-col justify-around lg:gap-x-56 md:ml-0 sm:ml-10 ml-5 space-y-3 mt-24'>
      <div className='flex flex-col space-y-3'>
        <span className='text-[14px] font-light opacity-70'>HOW WE WORK</span>
        <h2 className='text-4xl font-semibold sm:w-[25rem] w-[20rem]'>I will show you how our team works</h2>
      </div>
      <p className='text-[14px] font-extralight opacity-75 sm:w-[25rem] w-[20rem] md:pt-16 '>Bring to the table win-win market strategies to ensure perfect articles. </p>
      </div>

    <div className='grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5 mt-10 place-items-center'>

    {/*  1st card */}
    <div className='bg-[#7c4ee4] h-[20rem] w-[20rem] text-white  rounded-xl'>
      <div className='flex flex-col items-start pl-3 pt-5 justify-center space-y-3'>
        <h2 className='text-6xl font-semibold'>𝟬𝟏</h2>
        <span className='text-2xl font-semibold'>Brainstorming</span>
        <p className='w-72 text-[15px] font-extralight'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated</p>
      </div>
    </div>

    {/* 2nd card */}
  <Card2/>

    {/* Third card */}
    <Card3/>
    </div>
    </div>
  )
}



// 𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗