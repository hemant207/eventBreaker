import React from 'react'
import PageStarter from '../components/PageStarter'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


function AdminHomePage() {
    
  return (
    <div>
    <div className='relative min-h-screen bg-black opacity-90'>
        
        <PageStarter imgSrc={"https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=600"} imgText={"Organizer"} img_H={"100vh"}/>
        
    </div>
    <div style={{'color':'white'}} className='fixed top-24 w-1/5 right-0 bg-slate-800 flex justify-around p-5 z-10'>
        
    <Link to="/admin/login" >Login</Link>
    <Link to="/admin/signup">Signup</Link>
    </div>
    </div>
  )
}

export default AdminHomePage