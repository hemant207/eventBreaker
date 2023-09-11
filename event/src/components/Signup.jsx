import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Signup() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const nav = useNavigate();

    const handleSignUp = () => {
        const data = {
            username,
            password
        }

        axios.post('https://server-eventbreaker.onrender.com/admin/signup',data).then((res)=>{
            console.log(res.data);
            nav('/admin/login')
        })
    }

  return (
        <center>
            <h1 className='font-bold border-2 text-white border-white '>Signup</h1>
                <br/>   
    <div className='p-10 text-white border-2 border-white bg-black rounded-2xl' style={{'width':'400px'}}>
        <br/> 
       
        <input 
        placeholder='Username'
        style={{'background':"none","border":"2px solid rgb(245 158 11)","transitionDuration":'2s','width':'100%','height':'70px','padding':'10px','borderRadius':'2px'}}
        onChange={e=>{setUsername(e.target.value)}}/><br/><br/>

        <input 
        placeholder='Password'
        style={{'background':"none","border":"2px solid rgb(245 158 11)","transitionDuration":'2s','width':'100%','height':'70px','padding':'10px','borderRadius':'2px'}}
        onChange={e=>{setPassword(e.target.value)}}/><br/><br/>

        <Button variant='contained' onClick={e=>handleSignUp()}>Sign Up</Button>
        <br/><br/>

        <Typography variant='body1'>Already a Member?<Link to='/admin/login'> Login Here</Link></Typography>
    </div>
    </center>
  )
}

export default Signup