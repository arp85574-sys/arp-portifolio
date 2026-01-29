
import React from "react";
import { Code, Server, Database, Smartphone, Cloud, Wrench, UserSquare } from "lucide-react";
import useScrollAnimation from "../Components/useScrollAnimation";

 function Skills() {
  const [ref, isVisible] = useScrollAnimation();


  return (
    <div
    ref={ref}
    >
      {/* Heading */}
      <div className="flex justify-center mt-10">
        <h1
          className="
            inline-block font-extrabold text-white text-4xl
            overflow-hidden whitespace-nowrap
            border-r-2 border-pink-300
            animate-typingSkills
          "
        >
          My <span className="text-pink-300">Skills</span>
        </h1>
      </div>

      <h2 className="flex justify-center text-2xl text-white mt-3">
        Technologies I use to bring ideas to life
      </h2>

      {/* ================= FIRST ROW ================= */}
      <div className="flex justify-center flex-wrap">

        {/* Frontend */}
        <div className='border border-gray-300 w-80 rounded-3xl
          shadow-xl shadow-pink-300/60 bg-pink-200
          transition-all duration-300 hover:scale-105
          mt-10 mx-4 p-5 flex flex-col'>
          
          {/* TOP: icon left + heading right */}
          <div className="flex items-start gap-3">
            <div className="bg-black p-2 rounded-xl mt-1">
              <Code size={28} className="text-pink-300" />
            </div>
            <h1 className='text-white font-bold text-2xl leading-tight'>
              Frontend <br /> Development
            </h1>
          </div>

          {/* description */}
          <h2 className='mt-4 text-black text-sm'>
            Building responsive and interactive <br />
            user interfaces with modern tools.
          </h2>

          {/* buttons */}
          <div className='flex flex-wrap gap-3 mt-5'>
            {["React","Vue.js","Angular","TypeScript"].map((skill)=>(
              <div key={skill} className="border border-black h-10 w-24 rounded-full bg-black 
                text-white flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                <h1 className="text-sm font-semibold">{skill}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className='border border-gray-300 w-80 rounded-3xl
          shadow-xl shadow-pink-300/60 bg-pink-200
          transition-all duration-300 hover:scale-105
          mt-10 mx-4 p-5 flex flex-col'>
          
          <div className="flex items-start gap-3">
            <div className="bg-black p-2 rounded-xl mt-1">
              <Server size={28} className="text-pink-300" />
            </div>
            <h1 className='text-white font-bold text-2xl leading-tight'>
              Backend <br /> Development
            </h1>
          </div>

          <h2 className='mt-4 text-black text-sm'>
            Creating robust server-side <br />
            applications and RESTful APIs.
          </h2>

          <div className='flex flex-wrap gap-3 mt-5'>
            {["Node.js","Express","Django","Laravel"].map((skill)=>(
              <div key={skill} className="border border-black h-10 w-24 rounded-full bg-black 
                text-white flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                <h1 className="text-sm font-semibold">{skill}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className='border border-gray-300 w-80 rounded-3xl
          shadow-xl shadow-pink-300/60 bg-pink-200
          transition-all duration-300 hover:scale-105
          mt-10 mx-4 p-5 flex flex-col'>
          
          <div className="flex items-start gap-3">
            <div className="bg-black p-2 rounded-xl mt-1">
              <Database size={28} className="text-pink-300" />
            </div>
            <h1 className='text-white font-bold text-2xl leading-tight'>
              Database <br /> Management
            </h1>
          </div>

          <h2 className='mt-4 text-black text-sm'>
            Designing and optimizing databases <br />
            for performance and scalability.
          </h2>

          <div className='flex flex-wrap gap-3 mt-5'>
            {["MongoDB","PostgreSQL","MySQL","Firebase"].map((skill)=>(
              <div key={skill} className="border border-black h-10 w-24 rounded-full bg-black 
                text-white flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                <h1 className="text-sm font-semibold">{skill}</h1>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= SECOND ROW ================= */}
      <div className="flex justify-center flex-wrap">

        {/* Mobile */}
        <div className='border border-gray-300 w-80 rounded-3xl
          shadow-xl shadow-pink-300/60 bg-pink-200
          transition-all duration-300 hover:scale-105
          mt-10 mx-4 p-5 flex flex-col'>
          
          <div className="flex items-start gap-3">
            <div className="bg-black p-2 rounded-xl mt-1">
              <Smartphone size={28} className="text-pink-300" />
            </div>
            <h1 className='text-white font-bold text-2xl leading-tight'>
              Mobile <br /> Development
            </h1>
          </div>

          <h2 className='mt-4 text-black text-sm'>
            Building cross-platform mobile applications <br />
            with modern tools.
          </h2>

          <div className='flex flex-wrap gap-3 mt-5'>
            {["React Native","Flutter","Ionic","Swift"].map((skill)=>(
              <div key={skill} className="border border-black h-10 w-24 rounded-full bg-black 
                text-white flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                <h1 className="text-sm font-semibold">{skill}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud */}
        <div className='border border-gray-300 w-80 rounded-3xl
          shadow-xl shadow-pink-300/60 bg-pink-200
          transition-all duration-300 hover:scale-105
          mt-10 mx-4 p-5 flex flex-col'>
          
          <div className="flex items-start gap-3">
            <div className="bg-black p-2 rounded-xl mt-1">
              <Cloud size={28} className="text-pink-300" />
            </div>
            <h1 className='text-white font-bold text-2xl leading-tight mt-3'>
              Cloud & DevOps
            </h1>
          </div>

          <h2 className='mt-4 text-black text-sm'>
            Deploying and managing applications <br />
            in cloud environments.
          </h2>

          <div className='flex flex-wrap gap-3 mt-5'>
            {["AWS","Docker","Kubernetes","CI/CD"].map((skill)=>(
              <div key={skill} className="border border-black h-10 w-24 rounded-full bg-black 
                text-white flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                <h1 className="text-sm font-semibold">{skill}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className='border border-gray-300 w-80 rounded-3xl
          shadow-xl shadow-pink-300/60 bg-pink-200
          transition-all duration-300 hover:scale-105
          mt-10 mx-4 p-5 flex flex-col'>
          
          <div className="flex items-start gap-3">
            <div className="bg-black p-2 rounded-xl mt-1">
              <Wrench size={28} className="text-pink-300" />
            </div>
            <h1 className='text-white font-bold text-2xl leading-tight'>
              Tools & Technologies
            </h1>
          </div>

          <h2 className='mt-4 text-black text-sm'>
            Essential tools I use in my <br />
            development workflow.
          </h2>

          <div className='flex flex-wrap gap-3 mt-5'>
            {["Git & GitHub","Figma","Jest","VS Code"].map((skill)=>(
              <div key={skill} className="border border-black h-10 w-24 rounded-full bg-black 
                text-white flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                <h1 className="text-sm font-semibold">{skill}</h1>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
