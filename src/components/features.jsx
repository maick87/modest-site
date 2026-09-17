import React from 'react'
import workData  from '../info.js'
import myData from '../IMG.js'


const Features = () => {
  return (
    <div className=' border-b-1 border-[#8d8f92] h-115'>
        <div className='w-4/5 m-auto flex'>
            <div className='w-3/5'>
                <h1 className='text-2xl font-bold border-l-10 border-[#e1e6ea] border-solid pl-3 font-[Quattrocento_Sans] mb-10'>WE ARE MODEST.</h1>
                <p className='font-[Open_Sans] text-sm text-[#8d8f92]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor<br /> non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum <br /> 
                    quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis<br /> lacusullamcorper at.<br /> <br /> 
                    Phasellus sollicitudin ante eros ornare, <strong>sit amet luctus lorem semper</strong>. Suspendisse<br /> posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg<br /> egetnisi. 
                    Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu <br /> vestibulum
                </p>
                <div className='m-auto mt-7'>
                {myData.map((item) =>(
                    <div key={item} className='inline-block bg-[#c8cdd0] p-4 border-r-1 border-white m-auto'><img src={item.img} className='inline-block w-5 h-5' /></div>

                ))}
                </div>
            </div>
            <div className= 'w-2/5 mt-18'>
                {workData.map((item) => (
                    <div key={item} className='flex flex-row'>
                        <div className=''>
                            <div className='mb-8 px-2 py-2 text-white bg-[#23b7a3] font-[Quattrocento_Sans] flex gap-2'>{item.number}</div>
                        </div>
                
                    
                        <div className=' ml-5 relative bottom-1'>
                            <h1 className='font-[Quattrocento_Sans] text-sm font-bold'>{item.title}</h1>
                            <p className='font-[Open_Sans] text-sm font-regular text-[#8d8f92] mt-2'>{item.desc}</p>
                            <p className='font-[Open_Sans] text-sm font-regular text-[#8d8f92]  mb-5' >{item.desc2}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Features
