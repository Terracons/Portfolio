import React from 'react'
import Projectcard from './Projectcard'
import nexcent from "../../assets/images/nexcen.png"
import furniro from "../../assets/images/furnir.png"
import flag from "../../assets/images/flagg.png"
import kudaproject from "../../assets/images/kudaproject.png"
import ecommerce from "../../assets/images/ecommerc.png"


const Project = () => {
  return (
    <div>
    <section id='projects' className='w-full  pt-14 py-24 items-center JU border-b-[1px] border-b-black'>
    <div className='flex flex-col gap-4 font-titleFont mb-10 justify-center items-center'>
      <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK</h3>
      <h1 className='text-5xl uppercase text-gray-300 font-bold'>MY PROJECT</h1>
    </div>
    <div  className='grid grid-cols-3 gap-8'>
        <Projectcard
        src={ecommerce}
        des="Contributed to the development of the MainMart e-commerce store with full shopping cart
        functionality, implementing features that streamlined the purchasing process."
        title="Ecommerce Website"
        />
        <Projectcard 
        src={furniro}
        title="Furniro Website"
        des="Developed a Furniro Website  focusing on UI/UX design,responsiveness improving user
        experience through intuitive design and navigation"
        />

        <Projectcard
        src={flag}
        title="REST Countries API"
        des="Recreated the REST Countries Front-end mentor challenge, Delivered a fully responsive design that allows user to search for a country and filter region pulling data from the Rest API"
        />
        <Projectcard
        src={nexcent}
        title="Nexcent Website"
        des="Developed a Nexcent Website focusing on UI/UX design,responsiveness improving user
        experience through intuitive design and navigation"
        />
        <Projectcard
        des="Developed a clone of the Kuda banking app's website focusing on UI/UX design, improving user
        experience through intuitive design and navigation"
        src={kudaproject}
        title="Kuda Website clone"
        />


    </div>
    </section>

    </div>
  )
}

export default Project