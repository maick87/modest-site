import React from 'react'
import { useState } from 'react'

const Navbarlinks = () => {
    const Navlinks = [
        'HOME', 'ABOUT', 'WORK', 'TEAM', 'SERVICES', 'FEATURES', 'CONTACT'
    ]

    const [clicked, setClicked] = useState(false);

  return (
    <div className=''>
      <ul className=''>
        {Navlinks.map((item) => (
            <li key={item} alt='' className={`text-[#a4aead]  hover:border-2  xl:inline-block text-sm rounded-sm mx-3 px-2 py-1 ${!clicked ? '' : 'border-[#23b7a3] text-[#23b7a3]' } lg:block relative top-5 right-5`} onClick={()=> setClicked(true)}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Navbarlinks
