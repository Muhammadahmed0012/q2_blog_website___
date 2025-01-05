import React from 'react'
import Blogs_data from '@/app/blogs_data/page'
export  default function Blog_page() {
  return (
 <div className='overflow-hidden'>
    <div className='flex flex-col items-center justify-center space-y-7 mt-16'>
        <span className='text-[17px] font-extralight opacity-70'>
        OUR BLOGS
        </span>
        <h2 className='sm:text-4xl text-3xl font-semibold tracking-tight opacity-90 '>
        Find our all blogs from here
        </h2>
        <p className='text-lg font-extralight opacity-70 md:w-[49rem] sm:w-[40rem] w-[22rem] text-center'>our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along</p>
    </div>
    <div className='mt-10'>
    <Blogs_data/>
    </div>
    </div>
 
  )
}
