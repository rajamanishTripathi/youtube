import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col m-2 p-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img className="h-20" alt="menu" 
                src='https://img.favpng.com/6/7/20/computer-icons-hamburger-button-icon-design-web-typography-png-favpng-WCdfkJA1mmcy54pnSwS9bffjG.jpg'
            />
            <img className="h-20" alt="logo" 
                src='https://i.pinimg.com/originals/fb/d9/7f/fbd97f4a657c706e1ab93247a1c2634d.jpg'
            />
        </div>

        <div className="h-20 col-span-10">
            <input className="border border-black w-3/4 mt-5 p-2 rounded-l-full" type='text'/>
            <button className='border border-black px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        <div>
            <img className="h-20 col-span-1" alt='user'
            src='https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png'
            />
        </div>
    </div>
  )
}

export default Header
