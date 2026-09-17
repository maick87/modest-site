import React from 'react'
import Members from '../teamMembers'

const Team = () => {
  return (
    <div className='m-auto w-4/5 mt-20'>
        <div className='m-auto'>
            <h1 className='text-2xl font-bold border-l-10 border-[#e1e6ea] border-solid  font-[Quattrocento_Sans] mb-10 pl-3'>MEET THE TEAM</h1>
        </div>
        <div className='flex flex-row gap-5 mb-25'>
            {Members.map((item, index) => (
                <div key={index} className='w-80 h-80'>
                    <img className='' src={item.img} />
                    <div className='bg-[#e1e6ea] ml-0.3'>
                        <h1 className='font-bold font-[Quattrocento_Sans] pt-3 ml-5 '>{item.title}</h1>
                        <p className='font-[Open_Sans] text-[#c8cdd0] pb-3 ml-5 '>{item.desc}</p>
                        
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Team
