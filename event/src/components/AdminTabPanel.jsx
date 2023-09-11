import React from 'react'
import { Button, Tab, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {  useSetRecoilState } from 'recoil'
import userState from '../value/atom/user'
import token_data from '../value/atom/token'
import axios from 'axios'


function AdminTabPanel() {

  const setUserInfo = useSetRecoilState(userState);
  const setToken = useSetRecoilState(token_data);

  const HandleLogout = () => {
    
    axios.get("http://localhost:3000/admin/logout").then((res)=>{
      console.log(res.data);
    })
    setUserInfo('');
    setToken('');
    window.location = '/admin/login';
    
  }
  return (
    <div>
    <center >
    <div className='adminTab flex justify-center text-black bg-white border-amber-500 border-2 border-solid' style={{"margin":'2rem'}}>
    <Typography variant='h6'><Link to='/admin/home'> Home</Link> <Tab/>| <Tab/> </Typography>
    <Typography variant='h6'><Link to='/admin/addevents'>Add New Events</Link>  <Tab/>| <Tab/></Typography><br/> 
    <div>
    <Typography variant='h6'><Link to='/admin/profile'> Profile</Link></Typography>
    <Button onClick={HandleLogout}>Logout</Button>
    </div>
    </div>
    </center>
    
    </div>
  )
}

export default AdminTabPanel