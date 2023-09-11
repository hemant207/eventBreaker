
import { Button, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminTabPanel from './AdminTabPanel';
import { useRecoilValue } from 'recoil';
import tokenState from '../value/selector/tokenSelector';
import userState from '../value/atom/user';

function AddEvents() {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice]=useState("");
    const [date,setDate] = useState("");
    const nav = useNavigate();
    const token = useRecoilValue(tokenState);
    const user = useRecoilValue(userState);


    const HandleAddEvent =async () => {
      
      const data = {
        name,
        description,
        date,
        price,
        "organiser_id":user._id,
      }

      const config = {
        method: "post", // Specify the HTTP method as "post"
        data,
        credentials: 'include',
        headers: {
          Authorization:token, // Ensure the token is correctly formatted
        },
      };
    
      try {
        const res = await axios('https://server-eventbreaker.onrender.com/admin/addevent', config);
        console.log(res.data);
        nav('/admin/home')
        // Handle the response as needed
      } catch (error) {
        console.error(error);
        // Handle any errors that occur during the request
      }
    }; 

    useEffect(()=>{
      if(!user){
        nav('/admin/login')
      }
    })
    
  return (
    
        <>
        <div className='bg-white' style={{'paddingTop':'6rem'}}>
        </div>

        <AdminTabPanel/>

        <div className='p-8' >
        <Typography variant='h1'>Add Events</Typography>
            <br/>
            <br/>
            <TextField fullWidth label='Event Name' onChange={e=>setName(e.target.value)}/>
            <br/><br/>
            <TextField fullWidth label='Event description' onChange={e=>setDescription(e.target.value)}/>
            <br/><br/>
            <TextField fullWidth label='Event Price' onChange={e=>setPrice(e.target.value)}/>
            <br/><br/>
            <DatePicker  fullWidth label="Event Date" onChange={newValue=>setDate(newValue.format('DD-MM-YYYY'))} />
            <br/><br/>
            <Button variant='contained' onClick={HandleAddEvent}>ADD</Button>
            <br/><br/>
            
        
        </div>
        </>
  )
}

export default AddEvents