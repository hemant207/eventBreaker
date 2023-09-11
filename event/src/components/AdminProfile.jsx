import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import AdminTabPanel from './AdminTabPanel'
import { useRecoilValue } from 'recoil'
import { adminNameState, adminPasswordState } from '../value/selector/adminSelector'
import { Password } from '@mui/icons-material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminProfile() {
  const username = useRecoilValue(adminNameState);
  const pass = useRecoilValue(adminPasswordState);
  const nav = useNavigate()

  const [showPass,setShowPass] = useState(false);

  useEffect(()=>{
    if(!username){
      nav('/admin/login')
    }
  },[])
  

  return (
    <>
    <div className='h-screen'>
     <div className='bg-white' style={{'paddingTop':'6rem'}}>
    </div>

    <AdminTabPanel/>

    <Typography variant='h1'>AdminProfile</Typography>
    <br/>
    <br/>

    <div className='admin_profile flex justify-start p-8'>

        <div className='profile_pic' style={{'marginRight':'30px'}}>
        <img style={{'borderRadius':'2rem'}}    
        width={"200px"}
        src='https://www.w3schools.com/howto/img_avatar.png'/>
        </div>

        <div className='admin_Info'>
        <Typography variant='h3'>Username : {username}</Typography><Button>Update userName</Button>
        <br/><br/>
        <Typography variant='h4' ><div onClick={e=>{
          setShowPass(!showPass);
        }}>Password : {showPass?pass:<Password/>}</div></Typography><Button>Update Password</Button>
        </div>
    </div>
    </div>
    </>
  )
}

export default AdminProfile