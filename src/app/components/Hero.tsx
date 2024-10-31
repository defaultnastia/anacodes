import React from 'react'

const Hero = () => {
  return (
	<div className='min-h-128 bg-hero bg-center bg-cover flex flex-col items-center justify-center gap-10'>
    <h1 className='text-center font-medium text-3xl uppercase max-w-xl'>Hey, I’m Anastasiia Drachuk, 
    but you can call me <span className='text-orange-600'>Ana</span></h1>
    <div className='flex flex-col items-center justify-center gap-4'>
      <p>As a <span className='text-orange-600'>developer</span>, I strive to create dynamic, responsive and visually appealing web applications.</p>
      <p>As a <span className='text-orange-600'>former QA</span>, I strive to do it well.</p>
    </div>
  </div>
  )
}

export default Hero;