import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg col-span-1 '>
       <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Dance</li>
      </ul>
      <h1 className='font-bold mt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Politics</li>
        <li>Dance</li>
      </ul>
      <h1 className='font-bold mt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Politics</li>
        <li>Dance</li>
      </ul>
      
    </div>
  )
}

export default Sidebar;
