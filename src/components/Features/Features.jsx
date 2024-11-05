import React from 'react'
import Card from './card'
import { TbWorldUpload } from "react-icons/tb";
import { GrOptimize } from "react-icons/gr";
import { SiScrapy } from "react-icons/si";

const Features = () => {
  return (
    <section id='features' className='w-full  pt-14 py-24 items-center border-b-[1px] border-b-black'>
    <div className='flex flex-col gap-4 font-titleFont mb-10'>
      <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>Features</h3>
      <h1 className='text-5xl uppercase text-gray-300 font-bold'>WHAT I DO</h1>
    </div>
    <div className='grid grid-cols-1 lgl:grid-cols-3 gap-10'>
      <Card
      title="Website Development"
      des="Building dynamic web applications with React.js, HTML5,Tailwind CSS, and APIs to create seamless user experiences.  I craft engaging interfaces that boost client online presence and revenue."
      icon={<TbWorldUpload />}
      />
       <Card
      title="Web Optimization"
      des="Ensuring sites are responsive, fast-loading, and optimized for both desktop and mobile devices, which improves user experience and SEO rankings"
      icon={<GrOptimize />}
      />
       <Card
      title="Web Scraper"
      des="Developing web scrapers to extract valuable data from websites using Python, Beautiful Soup, and Selenium. By automating data collection, I help clients gain insights that drive informed decisions and revenue growth."
      icon={<SiScrapy />}
      />


    </div>

    </section>
  )
}

export default Features