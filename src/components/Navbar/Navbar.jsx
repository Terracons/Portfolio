import React from 'react'
import logo from "../../assets/images/logo.png"
import {navLinksdata } from "../../constants/index"
import {Link} from "react-scroll"
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-full h-24 mx-auto sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
        <div>
            <img className='w-32' src={logo} alt="" />
        </div>
        <div>
             <ul className='hidden lg:flex items-center gap-10'>
                {navLinksdata.map(({_id,title,link})=>(
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
                    hover:text-designColor duration-300' key={_id}>
                      <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
                ))}

             </ul>
             <span className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex
             items-center justify-center  rounded-full text-designColor cursor-pointer
             '><IoMenu /></span>
        </div>

    </div>
  )
}

export default Navbar