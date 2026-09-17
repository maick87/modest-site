import React from 'react'
import map from '../assets/map.png'

const Contact = () => {
  return (
    <div className='h-160'>
      <div className='m-auto'>
        <h1 className='text-2xl font-bold border-l-10 border-[#e1e6ea] border-solid  font-[Quattrocento_Sans] mb-10 pl-3 w-8/10 m-auto'>WHAT WE DO</h1>
        <img src={map} alt="" />
      </div>
      <div className='w-260 m-auto'>
        <h1 className='font-[Quattrocento_Sans] text-base font-bold mt-10'> CONTACT INFORMATION</h1>
        <p className='font-[Open_Sans] text-sm text-[#8c8e91] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus,<br /> tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed<br /> molestie gravida. <br /> <br /> Cras fermentum elit quis magna congue, vel sodales arcu vestibulum. <br />  Nunc lobortis dui magna, quis dapibus lacus </p>
      </div>
      <div className='w-125 m-auto relative left-65 bottom-75'>
        <form action="" className='bg-white'>
          <label htmlFor="YOUR NAME" className='pt-5 pl-5 inline-block w-1/2 text-left font-[Quattrocento_Sans] font-bold'>YOUR NAME</label>
          <label htmlFor="YOUR EMAIL" className='relative left-1 text-left w-1/2 inline-block font-[Quattrocento_Sans] font-bold'>YOUR EMAIL</label>
          
          <input type="text" className='ml-5 w-55 h-10 bg-[#ebedf0] inline-block mr-3'/>
          <input type="email" className='w-55 h-10 bg-[#ebedf0] inline-block'/>

          <label htmlFor="YOUR MESSAGE" className='pl-5 block mt-5 font-[Quattrocento_Sans] font-bold'>YOUR MESSAGE</label>
          <input type="text" className='ml-5 bg-[#ebedf0] block w-113 h-30'/>

          <button type='submit' className='ml-5 text-white mt-5 bg-[#6bb6a3] py-3 px-5 font-[Open_Sans] text-xs rounded-sm'>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
