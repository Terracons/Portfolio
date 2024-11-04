import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const Card = ({title, des, icon}) => {
  return (
    <div className='w-full px-6 h-80 py-12 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
        <div className='flex h-76 flex-col overflow-y-hidden items-center justify-center'>
            <div className='flex h-full flex-col gap-8  translate-y-12 items-center 
            justify-center group-hover:translate-y-0 transition-transform duration-500'>
              <div>
           <span className='text-5xl text-designColor'>{icon}</span> 
        </div>
        <div className='flex flex-col gap-8'>
            <h2 className='text-2xl font-titleFont font-bold text-gray-300'>{title}</h2>
            <p className='base'>{des}</p>
            <span className='text-2xl text-designColor'><FaLongArrowAltRight/></span>
        </div>
        </div>
        </div>
        
      
    </div>
  )
}

export default Card