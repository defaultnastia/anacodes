import React from 'react'

const About = () => {
  return (
	<div className='min-h-128 px-32 py-12 flex flex-col gap-10 justify-center'>
    <h2 className='text-center font-medium text-3xl uppercase'>Get to Know Me</h2>
    <div className='flex flex-col gap-5'><p>I spent several years in QA, working on both manual and automated testing and even leading teams. I’ve been lucky to work for big names like <span className='text-orange-600'>Zeiss</span> and <span className='text-orange-600'>Rakuten</span>, plus some exciting fintech and cybersecurity startups. Twice, I made the top-performers list, which was based on the team’s, manager’s and customer representatives reviews.</p>
    <p>Eventually, I got curious about development, so I learned JavaScript and HTML/CSS. I loved it and kept going with React, TypeScript, and Node.js — and now, I’m diving into Next.js. I’ve also got plans to learn Docker and Flutter soon to <span className='text-orange-600'>broaden my skills</span>.</p>
    <p>My QA experience really built up my <span className='text-orange-600'>teamwork skills</span> — responsibility, creativity, and communication, especially when it comes to sharing the good news (or the not-so-good) with teammates and clients. I also have a strong understanding of Scrum and other methodologies that help keep projects running smoothly.</p>
    <p>So far, I’ve led and contributed to group projects as a developer, and I have several simple personal projects to showcase my skills, you can see them <span className='text-orange-600 underline'>here</span>. By the way, this portfolio app was also <span className='text-orange-600 underline'>designed</span> and developed by me (TypeScript + Next.js + Tailwind).</p></div>
  </div>
  )
}

export default About