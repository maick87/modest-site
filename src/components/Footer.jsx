import React from 'react'
import BG2 from '../assets/BG2.png'
import x from '../assets/x.png'
import face from '../assets/face.png'
import behance from '../assets/behance.png'
import myData from '../IMG'

const Footer = () => {
  return (
    <div>
      <div className='h-10'>
        <img src={BG2} alt="" />
        <h1 className='m-auto w-258 font-[Quattrocento_Sans] text-sm text-white relative bottom-10'>Copyright 2026 rights reserved</h1>
        <div className='w-50 relative bottom-15 left-90 m-auto  h-10'>
         {myData.map((item, index) => (
          <div key={index} className='inline-block w-1/4'>
            <img src={item.img2} alt="" className='h-4 m-auto'/>
          </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
