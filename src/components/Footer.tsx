import React from 'react'
import ConatctForm from './Email'
export default function Footer() {
  return (
    <div className='overflow-hidden'>
    <div className='h-[25rem] w-full bg-[#7c4ee4] mt-20'>
      <div className='flex flex-col items-center h-[100%] justify-center text-white space-y-4'>
        <h2 className='font-semibold text-3xl sm:w-[30rem] w-[20rem] text-center'>Get our stories delivered From us to your inbox weekly.</h2>
        <div >
        <ConatctForm/>
        </div>
        <p className='sm:w-[28rem] w-[20rem] font-extralight text-sm text-center'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
        </div>
    </div>
    <div className='flex flex-col items-center space-y-7 mt-12'>
      <h2 className='text-3xl font-semibold'>Ahmed Blogs </h2>
     
        <ul className='flex space-x-9 text-black font-extralight opacity-70'>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
     <div>
      <div className='flex space-x-4 '>
        <div className='bg-[#7c4ee4] h-10 w-10 rounded-full flex items-center justify-center text-xl text-white'>Fb</div>
        <div className='bg-[#7c4ee4] h-10 w-10 rounded-full flex items-center justify-center text-xl text-white'>IG</div>
        <div className='bg-[#7c4ee4] h-10 w-10 rounded-full flex items-center justify-center text-xl text-white'>LN</div>
        <div className='bg-[#7c4ee4] h-10 w-10 rounded-full flex items-center justify-center text-xl text-white'>YT</div>
      </div>
     </div>
    </div>
    <div className='flex justify-center items-center w-[80%] h-20 mx-auto text-black opacity-70 mt-14 border-t-2 border-[#7c4ee4] text-[14px]'>
      <p className='text-center'>Copyright Ideapeel Inc © 2025. All Right Reserved</p>
    </div>
    </div>
  )
}
