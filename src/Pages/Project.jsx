import React from 'react'
import useScrollAnimation from '../Components/useScrollAnimation';

function Project() {
   const [ref, isVisible] = useScrollAnimation();
  return (
   <div
    ref={ref}
   >

        <div className='text-white text-center mt-25'>
          
          <h1 className='font-bold text-4xl'>
  <span className="animate-typing inline-block">
    My <span className='text-pink-300'>Projects</span>
  </span>
</h1>

          <h2 className='mt-4 text-2xl'>
          A Selection of my recent work
          </h2>
        </div>

        <div className="flex justify-center gap-10 mt-20">

          <div className='border border-gray-300 h-115 w-90 rounded-3xl 
                          shadow-xl shadow-pink-300/40 bg-pink-200 
                          transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                          p-6'>
                 <img src="/ecom.webp" alt=""  className='-mt-5 rounded-2xl'/>           
            <h1 className='text-white font-bold text-2xl  mt-2'>
              E-Commerce Platefrom
            </h1>
            <p className='mt-4 text-gray-800'>
              A full-featured online store with shopping <br />
              cart, user authentication, and payment <br />
              processing. 
            </p>
            {/* <button> */}
             <div className='flex gap-2.5'>
             <div className="border border-black h-10 w-24 rounded-full mt-4 bg-black 
                    text-white flex items-center justify-center cursor-pointer
                    transition-all duration-300 hover:bg-gray-800 hover:scale-105">
      <h1 className="text-sm font-semibold">React</h1>
    </div>

       <div className="border border-black h-10 w-24 rounded-full mt-4 bg-black 
                    text-white flex items-center justify-center cursor-pointer
                    transition-all duration-300 hover:bg-gray-800 hover:scale-105">
      <h1 className="text-sm font-semibold">Node.js </h1>
    </div>

       <div className="border border-black h-10 w-24 rounded-full mt-4 bg-black 
                    text-white flex items-center justify-center cursor-pointer
                    transition-all duration-300 hover:bg-gray-800 hover:scale-105">
      <h1 className="text-sm font-semibold">MongoDB</h1>
    </div>

       <div className="border border-black h-10 w-24 rounded-full mt-4 bg-black 
                    text-white flex items-center justify-center cursor-pointer
                    transition-all duration-300 hover:bg-gray-800 hover:scale-105">
      <h1 className="text-sm font-semibold">Stripe</h1>
    </div>
          </div>
{/* 
          tow buttons */}

{/* two buttons */}
<div className='flex gap-8 mt-5 ml-5'>

  {/* View Demo Button */}
  <button
    className='h-12 w-28 rounded-2xl bg-pink-300 text-white font-semibold
               flex items-center justify-center
               transition-all duration-300
               hover:bg-pink-400 hover:scale-105
               shadow-md shadow-pink-300/40'
  >
    View Demo
  </button>

  {/* Code Button */}
  <button
    className='h-12 w-28 rounded-2xl bg-black text-pink-300 font-semibold
               border border-pink-300
               flex items-center justify-center
               transition-all duration-300
               hover:bg-pink-300 hover:text-white hover:scale-105
               shadow-md'
  >
    Code
  </button>

</div>


          </div>

          {/* 2nd card */}

         
         <div className='border border-gray-300 h-115 w-90 rounded-3xl 
                shadow-xl shadow-pink-300/40 bg-pink-200 
                transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                p-6'>

  <img
    src="/download.jfif"
    alt=""
    className='rounded-3xl -mt-5 h-45 w-90
    '
  />

  <h1 className='text-white font-bold text-2xl mt-4'>
    Task Management App
  </h1>

  <p className='mt-4 text-gray-800'>
    A productivity application with drug-and- <br />
    drop functionality and real-time updates.
  
  </p>

  {/* tech stack */}
  <div className='flex gap-2.5  mt-6'>

    <div className="border border-black h-10 w-24 rounded-full mt-4 bg-black 
                    text-white flex items-center justify-center cursor-pointer
                    transition-all duration-300 hover:bg-gray-800 hover:scale-105">
      <h1 className="text-sm font-semibold">Vue.js</h1>
    </div>

    <div className="border border-black h-10 w-28 rounded-full mt-4 bg-black 
                    text-white flex items-center justify-center cursor-pointer
                    transition-all duration-300 hover:bg-gray-800 hover:scale-105">
      <h1 className="text-sm font-semibold">Firebase</h1>
    </div>

   
   
<div
  className="border border-black h-10 px-4 rounded-full mt-4 bg-black
             text-white flex items-center justify-center cursor-pointer
             whitespace-nowrap
             transition-all duration-300 hover:bg-gray-800 hover:scale-105">
  <h1 className="text-sm font-semibold">WebSockets</h1>
</div>


  </div>

  {/* buttons */}
  <div className='flex gap-6 mt-5 ml-5'>

    <button
      className='h-12 w-28 rounded-2xl bg-pink-300 text-white font-semibold
                 flex items-center justify-center
                 transition-all duration-300
                 hover:bg-pink-400 hover:scale-105
                 shadow-md shadow-pink-300/40'>
      View Demo
    </button>

    <button
      className='h-12 w-28 rounded-2xl bg-black text-pink-300 font-semibold
                 border border-pink-300
                 flex items-center justify-center
                 transition-all duration-300
                 hover:bg-pink-300 hover:text-white hover:scale-105
                 shadow-md'>
      Code
    </button>

  </div>

</div>

{/* card 3 */}
       <div className='border border-gray-300 h-115 w-90 rounded-3xl 
                shadow-xl shadow-pink-300/40 bg-pink-200 
                transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                p-6'>

  <img
    src="/project3.avif"
    alt=""
    className='rounded-3xl -mt-5 h-45 w-90
    '
  />

  <h1 className='text-white font-bold text-2xl mt-4'>
    Fitness Tracker
  </h1>

  <p className='mt-4 text-gray-800'>
    A mobile app for tracking workouts, <br />
    nutrition, and health metrics.
  
  </p>

  {/* tech stack */}
  <div className='flex gap-2.5  mt-6'>

    <div className="border border-black h-10 w-29 rounded-full mt-4 bg-black 
                    text-white flex items-center justify-center cursor-pointer
                    transition-all duration-300 hover:bg-gray-800 hover:scale-105">
      <h1 className="text-sm font-semibold">React</h1>
    </div>

    <div className="border border-black h-10 w-28 rounded-full mt-4 bg-black 
                    text-white flex items-center justify-center cursor-pointer
                    transition-all duration-300 hover:bg-gray-800 hover:scale-105">
      <h1 className="text-sm font-semibold">GraphQL</h1>
    </div>

   
   
<div
  className="border border-black h-10 px-4 rounded-full mt-4 bg-black
             text-white flex items-center justify-center cursor-pointer
             whitespace-nowrap
             transition-all duration-300 hover:bg-gray-800 hover:scale-105">
  <h1 className="text-sm font-semibold">MySQL</h1>
</div>


  </div>

  {/* buttons */}
  <div className='flex gap-6 mt-5 ml-5'>

    <button
      className='h-12 w-28 rounded-2xl bg-pink-300 text-white font-semibold
                 flex items-center justify-center
                 transition-all duration-300
                 hover:bg-pink-400 hover:scale-105
                 shadow-md shadow-pink-300/40'>
      View Demo
    </button>

    <button
      className='h-12 w-28 rounded-2xl bg-black text-pink-300 font-semibold
                 border border-pink-300
                 flex items-center justify-center
                 transition-all duration-300
                 hover:bg-pink-300 hover:text-white hover:scale-105
                 shadow-md'>
      Code
    </button>

  </div>

</div>

          

        </div>
{/* 2nd part */}
{/* 1st card */}
        <div className="flex justify-center gap-10 mt-20">

          <div className='border border-gray-300 h-115 w-90 rounded-3xl 
                          shadow-xl shadow-pink-300/40 bg-pink-200 
                          transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                          p-6'>
                 <img src="/project4.avif" alt=""  className='-mt-5 h-45 w-90 rounded-2xl'/>           
            <h1 className='text-white font-bold text-2xl  mt-2'>
              Portfolio Website
            </h1>
            <p className='mt-2 text-gray-800'>
              A Personal portfolio to showcase project, <br />
              skill, and blogs with dark/light mode <br />
              support. 
            </p>
            {/* <button> */}
             <div className='flex gap-2.5'>
 
 <div className="flex gap-4 flex-wrap">



<div className="flex flex-col gap-3">

  {/* Upper row – 3 buttons */}
  <div className="flex gap-4">

    <div className="h-10 px-5 rounded-full bg-black text-white
                    flex items-center justify-center
                    cursor-pointer transition-all duration-300
                    hover:bg-gray-800 hover:scale-105">
      <span className="text-sm font-medium tracking-wide">
        Next.js
      </span>
    </div>

    <div className="h-10 px-5 rounded-full bg-black text-white
                    flex items-center justify-center
                    cursor-pointer transition-all duration-300
                    hover:bg-gray-800 hover:scale-105">
      <span className="text-sm font-medium tracking-wide">
        Tailwind CSS
      </span>
    </div>

    <div className="h-10 px-5 rounded-full bg-black text-white
                    flex items-center justify-center
                    cursor-pointer transition-all duration-300
                    hover:bg-gray-800 hover:scale-105">
      <span className="text-sm font-medium tracking-wide">
        Framer Motion
      </span>
    </div>

  </div>

  {/* Lower row – 1 button */}
  <div>
    <div className="h-10 w-20 px-3 rounded-full bg-black text-white
                    flex items-center justify-center
                    cursor-pointer transition-all duration-300
                    hover:bg-gray-800 hover:scale-105">
      <span className="text-sm font-medium tracking-wide">
        Markdown
      </span>
    </div>
  </div>

</div>




</div>


       
          </div>
{/* 
          tow buttons */}

{/* two buttons */}
<div className='flex gap-8 mt-2 ml-5'>

  {/* View Demo Button */}
  <button
    className='h-12 w-28 rounded-2xl bg-pink-300 text-white font-semibold
               flex items-center justify-center
               transition-all duration-300
               hover:bg-pink-400 hover:scale-105
               shadow-md shadow-pink-300/40'
  >
    View Demo
  </button>

  {/* Code Button */}
  <button
    className='h-12 w-28 rounded-2xl bg-black text-pink-300 font-semibold
               border border-pink-300
               flex items-center justify-center
               transition-all duration-300
               hover:bg-pink-300 hover:text-white hover:scale-105
               shadow-md'
  >
    Code
  </button>

</div>


          </div>

          {/* 2nd card */}

         
 
 <div className="border border-gray-300 rounded-3xl shadow-xl shadow-pink-300/40 h-115 w-90
                bg-pink-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl
                p-6 max-w-sm">

  {/* Image */}
  <img
    src="/project5.avif"
    alt="Task Management App"
    className="rounded-2xl h-44 w-full object-cover -mt-5"
  />

  {/* Title */}
  <h1 className="text-white font-bold text-2xl mt-4">
    Task Management App
  </h1>

  {/* Description */}
  <p className="mt-2 text-gray-800 text-sm leading-relaxed">
    A productivity application with drag-and-drop functionality and real-time updates.
  </p>

  {/* Tech Stack – 2 rows like first card */}
  <div className="flex flex-col gap-3 mt-4">

    {/* Upper row */}
    <div className="flex gap-4">
      <div className="h-10 w-24 rounded-full bg-black text-white
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        <span className="text-sm font-medium tracking-wide">Socket.IO</span>
      </div>

      <div className="h-10 w-24 rounded-full bg-black text-white
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        <span className="text-sm font-medium tracking-wide">React</span>
      </div>

      <div className="h-10 px-4 rounded-full bg-black text-white
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        <span className="text-sm font-medium tracking-wide">Node.js</span>
      </div>
    </div>

    {/* Lower row – 1 button */}
    <div>
      <div className="h-10 w-20 px-4 rounded-full bg-black text-white
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        <span className="text-sm font-medium tracking-wide">Mongo.DB</span>
      </div>
    </div>

  </div>

  {/* Action Buttons */}
  <div className="flex gap-4 mt-4">
    <button className="h-12 w-28 rounded-2xl bg-pink-300 text-white font-semibold
                       flex items-center justify-center
                       transition-all duration-300 hover:bg-pink-400 hover:scale-105
                       shadow-md shadow-pink-300/40">
      View Demo
    </button>

    <button className="h-12 w-28 rounded-2xl bg-black text-pink-300 font-semibold
                       border border-pink-300
                       flex items-center justify-center
                       transition-all duration-300 hover:bg-pink-300 hover:text-white hover:scale-105
                       shadow-md">
      Code
    </button>
  </div>
</div>


{/* card 3 */}
 

{/* Card 3 */}
<div className="border border-gray-300 rounded-3xl shadow-xl shadow-pink-300/40 h-115 w-90
                bg-pink-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl
                p-6 max-w-sm">

  {/* Image */}
  <img
    src="/project6.avif"
    alt="AI Image Generator"
    className="rounded-2xl h-44 w-full object-cover -mt-5"
  />

  {/* Title */}
  <h1 className="text-white font-bold text-2xl mt-4">
    AI Image Generator
  </h1>

  {/* Description */}
  <p className="mt-2 text-gray-800 text-sm leading-relaxed">
    Generate images using AI prompts powered by OpenAI's DALLE model and Cloudinary.
  </p>

  {/* Tech Stack – 2 rows like 2nd card */}
  <div className="flex flex-col gap-3 mt-4">

    {/* Upper row */}
    <div className="flex gap-4">
      <div className="h-10 w-24 rounded-full bg-black text-white
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        <span className="text-sm font-medium tracking-wide">React</span>
      </div>

      <div className="h-10 w-28 rounded-full bg-black text-white
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        <span className="text-sm font-medium tracking-wide">OpenAI API</span>
      </div>

      <div className="h-10 px-4 rounded-full bg-black text-white
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        <span className="text-sm font-medium tracking-wide">Tailwind CSS</span>
      </div>
    </div>

    {/* Lower row – 1 button */}
    <div>
      <div className="h-10 w-24 rounded-full bg-black text-white
                      flex items-center justify-center cursor-pointer
                      transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        <span className="text-sm font-medium tracking-wide">Cloudinary</span>
      </div>
    </div>

  </div>

  {/* Action Buttons */}
  <div className="flex gap-4 mt-4">
    <button className="h-12 w-28 rounded-2xl bg-pink-300 text-white font-semibold
                       flex items-center justify-center
                       transition-all duration-300 hover:bg-pink-400 hover:scale-105
                       shadow-md shadow-pink-300/40">
      View Demo
    </button>

    <button className="h-12 w-28 rounded-2xl bg-black text-pink-300 font-semibold
                       border border-pink-300
                       flex items-center justify-center
                       transition-all duration-300 hover:bg-pink-300 hover:text-white hover:scale-105
                       shadow-md">
      Code
    </button>
  </div>
</div>



          

        </div>
       
       

       

      </div>
  )
}

export default Project
