import React from 'react'
import { Button, Typography } from '@mui/material'
import axios from 'axios'
import { useRecoilValue } from 'recoil';
import tokenState from '../value/selector/tokenSelector';

function UpdateEvents({events}) {
    
    const token = useRecoilValue(tokenState);
    const config = {
        credentials: 'include',
        headers: {
          Authorization:token, // Ensure the token is correctly formatted
        },
      };
    const HandleDeleteEvents = (id) =>{
        axios.delete(`https://server-eventbreaker.onrender.com/admin/event/${id}`,config).then((res)=>{
            console.log(res.data);
            location.reload();
        })
    }


  return (
    <>
   
    <div className=' text-amber-500 flex flex-wrap justify-center p-5'>
        
        {events.map(t=>(
            <>
            <div key={t._id} className='border-amber-400 border-2 border-solid m-2 p-5 w-96 hover:bg-amber-400 hover:text-black duration-300'>
            <Typography variant='h3'>{t.type || t.name}</Typography>
            <Typography variant='h6'>{t.description}</Typography><br/><br/>
            <Typography variant='h6' > Price : {t.price}</Typography><br/>
            <div>
              <button className=' text-xl' onClick={e=>HandleDeleteEvents(t._id)}><p>Delete</p>  </button>
              </div>
            <br/>
            </div>
            </>
        ))}
    </div>
    </>
  )
}

export default UpdateEvents





 