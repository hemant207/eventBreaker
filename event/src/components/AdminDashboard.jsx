
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tickets from './Tickets'
import AdminTabPanel from './AdminTabPanel'
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import tokenState from '../value/selector/tokenSelector';
import { adminNameState } from '../value/selector/adminSelector';
import { useNavigate } from 'react-router-dom';
import UpdateEvents from './UpdateEvents';

function AdminDashboard() {

  const [events,setEvents] = useState([]);
  const token = useRecoilValue(tokenState);
  const user = useRecoilValue(adminNameState) || "";
  const nav = useNavigate()

  console.log(user);

  useEffect(()=>{
      const config = {
        headers:{
          Authorization:token
        }
      }
      axios.get('http://localhost:3000/admin/events/',config) .then((res) => {
        console.log(res.data);
        setEvents(res.data.events);
  
      })
      .catch((error) => {
        console.error(error);
      });
    }
    ,[user])

    if(!user){
      nav('/admin/login')
    }

  return (
    <>
    <div className='bg-white' style={{'paddingTop':'6rem'}}>
    </div>

    <AdminTabPanel/>
    <div >
        <Typography variant='h2' >Your Events</Typography>
    <UpdateEvents events={events}/>
    </div>
    </>
  )
}

export default AdminDashboard