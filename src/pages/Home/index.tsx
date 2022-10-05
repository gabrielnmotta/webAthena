import React from 'react'
import Navbar from '../../components/NavBar/Nav';
import { Sidebar } from '../../components/Sidebar/index';


export function Home() {
  return (
    <div className='container'>
        <Navbar/>
        <Sidebar />
    </div>
    
  )
}
