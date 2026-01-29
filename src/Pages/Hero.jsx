import React from 'react'
import useScrollAnimation from '../Components/useScrollAnimation';

function Hero() {
      const [ref, isVisible] = useScrollAnimation();
  return (
   <>

   <div 
   style={{backgroundImage:"url(bg.svg)"}}
   ref={ref}
   className="flex items-center justify-between md:h-[500px]">

  {/* LEFT TEXT (same as before) */}


  <div className="text-black mt-30 ml-30">
    <h1 className="text-black text-4xl font-bold">
      Hi, I'm{" "}
      <span className="text-pink-300 font-extrabold">
        Aroosa Muzaffar
      </span>
    </h1>

    <p className="mt-2 font-bold text-3xl text-black animate-typing-fsd">
      Full Stack Developer
    </p>

    <h2 className="text-white mt-4 hover:text-pink-300 text-2">
      I Create Stunning Web-experiences with mordern technologies and innovative design.
    </h2>

    <div className="flex gap-8 mt-6">
      <button className="px-6 py-3 rounded-full bg-pink-300 text-black font-semibold
                         hover:bg-pink-300 transition duration-300 shadow-md">
        View Work
      </button>

      <button className="px-6 py-3 rounded-full border border-black text-black font-semibold
                         hover:bg-pink-300 hover:text-black transition duration-300">
        Contact Me
      </button>
    </div>
  </div>

 {/* RIGHT IMAGE */}
<div className="mr-20 mt-10">
  <img
    src="/pakistani.png"
    alt=""
    className="w-80 h-80 object-cover rounded-full animate-float
               shadow-[0_0_40px_rgba(236,72,153,0.6)]"
  />
</div>

 

</div>
   
   
   
   
   
   
   
   </>
  )
}

export default Hero
