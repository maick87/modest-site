import React from 'react'
import back from '../assets/back.png'

const Header = () => {
  return (
    <div className='m-auto h-140'>
      <div className='z-0 m-auto'>
          <img src={back} className='bg-cover relative t-0' />        
      </div>
      <div className='w-4/5 m-auto'>
        <div className='relative bottom-90'>
            <h1 className='text-white text-4xl/25 font-bold font-[Quattrocento_Sans]'>WELCOME TO OUR MARKETPLACE</h1>
            <p className='text-white font-[Open_Sans] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor
            <br/>non, ornare sagittis dolor. Nulla vestibulu lacus ...</p>
        </div>
        <div className='relative bottom-80'>
          <button className='font-[Quattrocento_Sans] bg-[#23b7a3] text-white rounded-sm px-4 py-3 mr-3 text-sm'>VIEW MORE</button>
          <button className='font-[Quattrocento_Sans] text-white border-2 rounded-sm px-4 py-3 text-sm'>VIDEO TOUR</button>
        </div>
      </div>
    </div>
  )
}

export default Header;
