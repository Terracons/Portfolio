import React from 'react'
import image from "../../assets/images/bannerImg.png"
import { FaLinkedin,FaTwitter,FaGithub} from "react-icons/fa";
import { Button } from 'react-scroll';

const Contact = () => {
  return (
    <section id='contact' className='w-full  pt-14 py-24 items-center border-b-[1px] border-b-black'>
    <div className='flex flex-col gap-4 font-titleFont items-center justify-center mb-10'>
      <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>CONTACT</h3>
      <h1 className='text-5xl uppercase text-gray-300 font-bold'>Contact With Me</h1>
    </div>

    <div className='w-full'>
        <div className='w-full  flex justify-between'> 
            <div className=" w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <div className='w-full h-64 flex justify-center items-center'>
                    <img 
                className='w-64  object-center'
                src={image} alt="" />
                </div>
                <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">AROWOLO SODIQ</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer IN VIEW
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Arowolo Sodiq is an emerging MERN Stack Developer skilled in MongoDB, Express.js, React, and Node.js. He is focused on building responsive, user-friendly web applications and is committed to continuous learning to stay current with the latest web technologies.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234 8133532111</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">arowolosdq@gmail.com</span>
        </p>
      </div>
      <div className='flex gap-10'>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4 '>FIND ME IN</h2>
                <div className='flex gap-4'>
                    <span className="bannarIcon"><FaGithub/></span>
                    <span className="bannarIcon"><FaLinkedin/></span>
                    <span className="bannarIcon"><FaTwitter/></span>
                </div>
            </div>
                
        </div>
        </div>
            <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form action=""  className='h-auto flex flex-col gap-8 '  >

                <div className='flex w-full gap-10'>
                <div className='flex flex-col gap-3 w-1/2'>
                <label htmlFor="name">YOUR NAME</label>
                <input className='contactInput ' type="text" id='name' />
                </div>
                <div className='flex flex-col gap-3 w-1/2'>
                <label htmlFor="name">PHONE</label>
                <input className='contactInput ' type="text" id='name' />
                </div>
                </div>
                <div className='flex flex-col gap-3 '>
                <label htmlFor="name">EMAIL</label>
                <input className='contactInput ' type="email" id='name' />
                </div>
                <div className='flex flex-col gap-3 '>
                <label htmlFor="name">SUBJECT</label>
                <input className='contactInput' type="text" id='name' />
                </div>
                <textarea className='contactTextArea' name="" id="" cols="30" rows="10"></textarea>
                <button className='contactTextArea  hover:bg-red-600'>SEND MESSAGE</button>
                
                
                
            </form>
            </div>
        </div>
       

    </div>
    

    

    </section>
  )
}

export default Contact