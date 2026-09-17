import React from 'react'
import workImages from '../workImages'
import someImages from '../someImg'
import BG from '../assets/BG.png'


const OurWork = () => {
  return (
    <div className='h-180'>
      <img src={BG} alt='' />
      <div className='relative bottom-190'>
      
        
        <div className='w-4/5 m-auto relative '>
        <h1 className='m-auto text-2xl font-bold border-l-10 border-[#535a62] text-white border-solid  font-[Quattrocento_Sans] mb-10 relative top-45 w-2/2 pl-3'>LOVELY WORK</h1>
        {workImages.map((item, index) => (
          <div key={index} className='mt-50 inline-block  w-1/3'>
            <img className='w-78 h-40 ' src={item.img} alt="images" />
          </div>
        ))}
        </div>
        <div className='w-4/5 m-auto mt-5'>
          {someImages.map((item, index) => (
            <div key={index} className=' inline-block  w-1/3'>
              <img className='w-78 h-40 ' src={item.img} alt="images" />
              
            </div>
          ))}

        </div>
        <div className='m-auto w-1/6 mt-10'>
          <button className='py-2 px-3 font-[Open_Sans] text-white border-solid border-white m-auto text-sm border-2 rounded-md'>SHOW ME MORE</button>
        </div>
    
      </div>
    </div>
  )
}

export default OurWork
