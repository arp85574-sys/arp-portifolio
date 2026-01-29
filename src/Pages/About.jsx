import React from 'react'
import { Code, Wrench } from 'lucide-react'
import useScrollAnimation from '../Components/useScrollAnimation';

function About() {
      const [ref, isVisible] = useScrollAnimation();

  return (
    <div
    ref={ref}
    className="px-10 md:px-20">

      {/* Heading */}
      <div className="text-white text-center flex flex-col items-center mt-20">
        <h1 className="font-bold text-4xl overflow-hidden whitespace-nowrap border-r-2 border-pink-300 animate-typingAbout">
          About <span className="text-pink-300">Me</span>
        </h1>
        <h2 className="mt-4 text-lg md:text-xl">
          Get to know more about my background and passion
        </h2>
      </div>

      {/* Image + Content */}
      <div className="flex flex-col md:flex-row items-start gap-12 mt-14">

        {/* LEFT IMAGE */}
       
  <div className="md:w-1/2 flex justify-center">
  <img
    src="/pakistani.png"
    alt="Pakistani Girl"
    className="
      w-[280px] md:w-[500px]
      h-[420px] md:h-[550px]
      object-cover
      rounded-2xl
      shadow-lg shadow-pink-400/40
      animate-imageFloat
      transition-transform duration-500
      hover:scale-105
    "
  />
</div>

  



        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 animate-fadeIn">

          {/* My Journey */}
          <h1 className="text-white font-extrabold text-3xl">
            My Journey
          </h1>

          <p className="text-white mt-5 leading-relaxed text-sm md:text-base">
            I'm a passionate full-stack developer with over 5 years of experience creating digital
            solutions for businesses around the world. My journey started with basic HTML/CSS
            websites and has evolved into building complex web applications with modern frameworks.
          </p>

          <p className="text-white mt-5 leading-relaxed text-sm md:text-base">
            When I'm not coding, you can find me exploring new technologies, contributing to open- <br />
            source project, or sharing my knowledge through tech blogs and tutorials. I believe in <br />
            continuous learning and pushing the boundaries of what's possible on the web.
          </p>

          {/* CARDS BELOW MY JOURNEY */}
         {/* CARDS BELOW MY JOURNEY */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

  {/* Card 1 */}
  <div className="bg-pink-200 rounded-3xl p-6 shadow-xl shadow-pink-300/40
                  transition-all duration-500 hover:scale-105 animate-fadeUp">
    <div className="flex items-start gap-3">
      <div className="bg-black p-2 rounded-xl">
        <Code size={26} className="text-pink-300" />
      </div>
      <h1 className="text-white font-bold text-xl">Innovative</h1>
    </div>
    <p className="mt-3 text-gray-800 text-sm leading-relaxed">
      I love creating unique solutions to complex problems using modern technologies.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-pink-200 rounded-3xl p-6 shadow-xl shadow-pink-300/40
                  transition-all duration-500 hover:scale-105 animate-fadeUp">
    <div className="flex items-start gap-3">
      <div className="bg-black p-2 rounded-xl">
        <Code size={26} className="text-pink-300" />
      </div>
      <h1 className="text-white font-bold text-xl">Design Oriented</h1>
    </div>
    <p className="mt-3 text-gray-800 text-sm leading-relaxed">
      Beautiful UI and smooth UX are always my top priorities.
    </p>
  </div>

  {/* Card 3 → below 1st */}
  <div className="bg-pink-200 rounded-3xl p-6 shadow-xl shadow-pink-300/40
                  transition-all duration-500 hover:scale-105 animate-fadeUp">
    <div className="flex items-start gap-3">
      <div className="bg-black p-2 rounded-xl">
        <Wrench size={26} className="text-pink-300" />
      </div>
      <h1 className="text-white font-bold text-xl">Clean Code</h1>
    </div>
    <p className="mt-3 text-gray-800 text-sm leading-relaxed">
      I write scalable, maintainable, and optimized code following best practices.
    </p>
  </div>

</div>

        </div>

      </div>

      
    </div>
  )
}

export default About
