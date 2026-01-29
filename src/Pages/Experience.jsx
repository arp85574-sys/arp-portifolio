import React from 'react'
import useScrollAnimation from '../Components/useScrollAnimation';

function Experience() {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
    ref={ref}
    >
    
    
    <div className="flex justify-center-safe mt-10">
  <h1 className="text-white font-bold text-3xl">
    <span className="animate-typingExperience">
      Work <span className="text-pink-300">Experience</span>
    </span>
  </h1>
 
</div>

<div className='flex justify-center-safe text-3xl'>
     <h2 className='text-white'>
My professional journey so far

  </h2>
</div>


<div className="flex flex-col items-center gap-10 mt-20">

  {/* Card 1 */}
  <div className="flex w-[90%] max-w-4xl bg-pink-200 rounded-4xl shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-95 transition-transform duration-300">

    {/* Left pink line fully left */}
    <div className="w-3 bg-pink-500 rounded-l-2xl"></div>

    {/* Content */}
    <div className="p-6 flex flex-col justify-start">
      <h1 className='font-bold text-2xl md:text-3xl text-white'>
        Senior Frontend Developer  
        <span className="ml-1 animate-pulse">|</span>
      </h1>
      <h2 className='mt-2 text-md md:text-lg font-medium'>
        TechCorp Inc.
      </h2>
      <h3 className='mt-3 text-sm md:text-base  font-bold leading-relaxed'>
        Leading frontend development for enterprise clients, implementing modern frameworks, <br />
        and mentoring junior developers.
      </h3>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex w-[90%] max-w-4xl bg-pink-200 rounded-4xl shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-95 transition-transform duration-300">
    <div className="w-3 bg-pink-500 rounded-l-2xl"></div>
    <div className="p-6 flex flex-col justify-start">
      <h1 className='font-bold text-2xl md:text-3xl text-white'>
        Web Developer  
        <span className="ml-1 animate-pulse">|</span>
      </h1>
      <h2 className='mt-2 text-md md:text-lg  font-medium'>
        Digital Soulution LLC
      </h2>
      <h3 className='mt-3 text-sm md:text-base  font-bold leading-relaxed'>
        Developed and maintainned web applications for various clients,
        focusing on responsive design and performance optimization.
      </h3>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex w-[90%] max-w-4xl bg-pink-200 rounded-4xl shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-95 transition-transform duration-300
  font-bold">
    <div className="w-3 bg-pink-500 rounded-l-2xl"></div>
    <div className="p-6 flex flex-col justify-start">
      <h1 className='font-bold text-2xl md:text-3xl text-white'>
        Junior Developer
        <span className="ml-1 animate-pulse">|</span>
      </h1>
      <h2 className='mt-2 text-md md:text-lg  font-medium'>
        StartUp Ventures
      </h2>
      <h3 className='mt-3 text-sm md:text-base text  font-bold leading-relaxed'>
    Started my career building basic websites and gradually took on , <br />
    more complex projects as i eaxpanded my skill set.
      </h3>
    </div>
  </div>

</div>











    </div>
  )
}

export default Experience
