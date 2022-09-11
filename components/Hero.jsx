import React from 'react'
import Link from 'next/link'
const Hero = ({ heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-fix bg-center bg-cover hero-img'>
        <div className='p-5 text-center z-[2] mt-[-20rem] md:p-56 lg:p-96 xl:p-[38rem]'>
            <h2 className='text-5xl font-bold text-accent'>{heading}</h2>
            <p className='py-5 text-xl text-mainTxt'>{message}</p>
            <button className='px-8 py-2 bg-secondary rounded-md text-accent'>
              <Link href='/#portfolio'>Explore Work</Link>
            </button>
        </div>
    </div>
  )
}

export default Hero