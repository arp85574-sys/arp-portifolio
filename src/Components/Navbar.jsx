import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <>
  
    
    <div className="w-full border-b border-gray-700 bg-gray-900 shadow-md">
  <div className=" mx-auto flex items-center justify-between h-20 px-6">

    {/* Logo / Name */}

  
  
<div className='flex pt-4 gap-6 '>

   <div className="flex  justify-center">
  <img
    src="/img.webp"
    alt=""
    className="
      w-15 h-15
      object-cover
      rounded-full
      shadow-[0_0_30px_rgba(236,72,153,0.7)]
      animate-float
      transition-transform duration-300
      hover:scale-105
    "
  />
</div>

    <h1 className="text-white  pl-4  text-2xl font-extrabold tracking-wide hover:text-pink-300">
      AROOSA  
      <span className='text-pink-300'> MUZAFFAR</span>
     

      <div className='w-4 h-4 bg-pink-300 rounded-full'></div>
    </h1>

</div>


 
 
  

    {/* Navigation Links */}
    <div className="flex gap-8 text-gray-300 text-2xl">

<Link
  to="/"
  className="cursor-pointer hover:text-pink-300 transition"
>
  Home
</Link>

      
      <Link
  to="/about"
  className="cursor-pointer hover:text-pink-300 transition"
>
  About
</Link>

  <Link to="/skills" className="cursor-pointer hover:text-pink-300 transition">
    Skills
  </Link>

  <Link to="/Project" className="cursor-pointer hover:text-pink-300 transition">
    Projects
  </Link>

  <Link to="/experience" className="cursor-pointer hover:text-pink-300 transition">
    Experience
  </Link>

  <Link to="/contact" className="cursor-pointer hover:text-pink-300 transition">
    Contact
  </Link>
    </div>

  </div>
</div>
</>
  )
}

export default Navbar
