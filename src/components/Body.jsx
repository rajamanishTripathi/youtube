import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import {Outlet} from "react-router-dom";

//i have to switch between maincontainer and watchpage . so used outlet
const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <Sidebar/>
      
      <Outlet/>
    </div>
  )
}

export default Body;
