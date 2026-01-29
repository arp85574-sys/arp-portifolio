import React from 'react'
import useScrollAnimation from '../Components/useScrollAnimation';
import { Linkedin } from "lucide-react";

export default function Contact() {
      const [ref, isVisible] = useScrollAnimation();

  return (
    <div 
    ref={ref}>
    
    <div className="flex flex-col items-center text-center mt-20 px-4 md:px-0 fade-in-up">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
    <span className="typing animate-typing">
      <span className="text-white">Get In </span>
      <span className="text-pink-300">Touch</span>
    </span>
  </h1>
  <h2 className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10">
    Have a project in mind or want to collaborate? Let's talk!
  </h2>
</div>

   <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE INFO */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Get In <span className="text-pink-300">Touch</span>
          </h1>

          <p className="text-gray-300">
            Feel free to contact me anytime. I will get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-pink-300 text-black flex items-center justify-center">
                📍
              </div>
              <span>Pakistan</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-pink-300 text-black flex items-center justify-center">
                ✉️
              </div>
              <span>aroosar999@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
  <a
    href="https://www.linkedin.com/in/aroosa-rajpoot-001214395/"
    target="_blank"
    className="w-10 h-10 rounded-full bg-pink-300 text-black 
               flex items-center justify-center"
  >
    <Linkedin size={20} />
  </a>

  <span>Linkedin.com</span>
</div>

            
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="border border-pink-300/40 rounded-2xl p-8">
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3" />
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3" />
            <textarea placeholder="Your Message" rows="6" className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 resize-none"></textarea>
            <button className="w-full hover:bg-pink-400 hover:scale-90 bg-pink-300 text-black font-bold py-3 rounded-xl">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  






    </div>
  )
}
