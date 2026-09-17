import React from 'react'
import someIcons from '../icons'

const Icons = () => {
  return (
    <div className='h-160'>
      <div className='w-4/5 h-1/2 m-auto'>
        <h1 className='text-2xl font-bold border-l-10 border-[#e1e6ea] border-solid  font-[Quattrocento_Sans] mb-10 pl-3'>WHAT WE DO</h1>
        {someIcons.map((item, index) => (
            <div className='inline-block w-1/4 relative top-15'>
                <img src={item.img} alt="" className=' m-auto h-10'/>
                <h1 className='mt-5 m-auto text-base text-center font-[Quattrocento_Sans] font-bold'>{item.title}</h1>
                <p className='text-center font-[Open_Sans] mt-5 text-[#8c8e91] text-sm'>Nunc mattis lorem in leo lobortis,<br /> ut venenatis justo commodo. <br /> Maecenas a justo nec velit egestas <br /> fermentum.</p>
            </div>
        ))}
         {someIcons.map((item, index) => (
            <div className='inline-block w-1/4 relative top-30'>
                <img src={item.img} alt="" className=' m-auto h-10'/>
                <h1 className='mt-5 m-auto text-base text-center font-[Quattrocento_Sans] font-bold'>{item.title}</h1>
                <p className='text-center font-[Open_Sans] mt-5 text-[#8c8e91] text-sm'>Nunc mattis lorem in leo lobortis,<br /> ut venenatis justo commodo. <br /> Maecenas a justo nec velit egestas <br /> fermentum.</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Icons
