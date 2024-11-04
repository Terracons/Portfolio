import React from 'react'
import {useTypewriter, Cursor} from "react-simple-typewriter"
import { FaLinkedin,FaTwitter,FaGithub,FaReact,FaHtml5,FaPython,FaWordpress } from "react-icons/fa";
import heroimg from "../../assets/images/bannerImg.png";

const Banner = () => {
    const [text] = useTypewriter(
        {words:["Front End Developer", "Back End Developer", "Full Stack Developer", "Professional Coder", "Web Scraper "],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
     })
  return (
    <section id='home' className='w-full py-20 pt-10 pb-20 flex items-center border-b-[1px] border-b-black'>

        <div className='w-1/2 flex flex-col gap-20'>

            <div className=' flex flex-col gap-5 '>
                <h4 className='text-lg font-normal'>Welcome to My Digital World</h4>
                <h1 className='text-6xl font-bold text-white'> 
                Hi, I'm {""}
                <span className='text-designColor capitalize text-5xl '>Arowolo Sodiq</span>
                </h1>
                <h2 className='text-4xl font-bold text-white' >a <span >{text}</span>
                <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor='#ff014f'
                />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>I use innovative web solutions, including web scraping,
                 to craft high-impact digital experiences that drive real results.
                  My focus is on developing strategies that boost user engagement 
                  and increase client revenue by delivering valuable insights and automation.
                   Let’s work together to elevate your business!</p>



            </div>
            <div >
            <div className='flex gap-10'>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4 '>FIND ME IN</h2>
                <div className='flex gap-4'>
                    <span className="bannarIcon"><FaGithub/></span>
                    <span className="bannarIcon"><FaLinkedin/></span>
                    <span className="bannarIcon"><FaTwitter/></span>
                </div>
            </div>
            <div >
                <h2 className='text-base uppercase font-titleFont mb-4 '>BEST SKILL ON </h2>
                <div className='flex gap-4'>
                    <span className="bannarIcon"><FaReact/></span>
                    <span className="bannarIcon"><FaHtml5/></span>
                    <span className="bannarIcon"><FaPython/></span>
                    <span className="bannarIcon"><FaWordpress/></span>
                    
                </div>
            </div>
            </div>
            

            </div>


        </div>

        <div className='w-1/2 flex justify-center items-center relative'  >
            <img 
            className='w-[500px] z-10'
            src={heroimg} alt="" />
             <div className="absolute bottom-0 w-[600px] h-[500px] lgl:w-[500px] lgl:h-[500px]
              bg-gradient-to-r from-[#1e2024]
              to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>


    </section>
  )
}

export default Banner