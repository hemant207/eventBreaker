import React from 'react'
import PageStarter from '../components/PageStarter'
import Tickets from '../components/Tickets'
import { Typography } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react'

function TicketPage() {
  
  const [events,setEvents] = useState([]);

    

  useEffect(()=>{
      axios.get('https://server-eventbreaker.onrender.com/events/').then((res)=>{
          //console.log(res.data);
          setEvents(res.data.events);
      })
  },[])

  console.log(events)

  return (
    <div className='bg-black min-h-screen'>
        <div>
        <PageStarter imgSrc={'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg'}/>
        </div>
        <div className='my-5'>
    <center>
    <Typography variant='h4' className='w-1/2 text-black bg-white border-amber-200 border-2 border-solid'>Event Tickets</Typography>
    </center>
    </div>
    <div>
        <Tickets events={events}/>
        </div>
    </div>
  )
}

export default TicketPage