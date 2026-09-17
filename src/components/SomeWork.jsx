import React from 'react'
import workRel from '../imgBack'
import BG from '../assets/BG.png'

const SomeWork = () => {
  return (
    <div className='h-180'>
        <img src={BG} alt="" />
        
        <div className='w-4/5 m-auto'>
            <h1 className='m-auto text-2xl font-bold border-l-10 border-[#535a62] text-white border-solid  font-[Quattrocento_Sans] mb-10 relative bottom-140 w-2/2 pl-3'>FEATURES</h1>
            {workRel.map((item, index) => (
                <div key={index} className='w-1/3 inline-block m-auto relative bottom-135'>
                    

                    <img src={item.img} alt="" className='w-80 h-50'/>
                    <h1 className='text-white font-[Quattrocento_Sans] text-base mt-5'>{item.title}</h1>
                    <p className='text-[#8c8e91] font-[Open_Sans] text-sm mt-5'>{item.desc}</p>
                    <p className='text-[#8c8e91] font-[Open_Sans] text-sm'>{item.desc1}</p>
                    <p className='text-[#8c8e91] font-[Open_Sans] text-sm'>{item.desc2}</p>
                    <p className='text-[#8c8e91] font-[Open_Sans] text-sm'>{item.desc3}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SomeWork
