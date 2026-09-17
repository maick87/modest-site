import React from "react"
import logo from '../assets/logo.png'
import Navbarlinks from "./navbarlinks"
import menu from '../assets/menu.png'
import onToggle from '../clickFunc'

const Navbar = () => {
  
  return (
    <div className=' xl:bg-[#1d2126] h-20  flex flex-row lg:bg-[#1d2126] flex flex-row'>
      <div className='xl:w-4/5 m-auto'>
        <div className='xl:w-2/5 relative top-4 lg:relative right-115 top-7'>
          <img src={logo} alt='logo' className=''/>
        </div>
        <div className='xl:w-3/5 m-auto relative left-48 bottom-7'>
          <img onClick={onToggle} src={menu} alt="" className='xl:hidden lg:w-7 h-6'/>
          <Navbarlinks />
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
