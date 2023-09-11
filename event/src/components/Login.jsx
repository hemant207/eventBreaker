import { TextFields } from '@mui/icons-material';
import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import userState from '../value/atom/user';
import token_data from '../value/atom/token';

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [msg,setMsg] = useState("");
    const [snackOpen,setSnackOpen] = useState(false);
    const setUserInfo = useSetRecoilState(userState);
    const setToken = useSetRecoilState(token_data);

    const nav = useNavigate();

    const handleLogin = () => {
        const data = {
            username,
            password
        }

        try {
            axios.post('http://localhost:3000/admin/login',data).then((res)=>{
            console.log(res.data);
            setMsg(res.data.message);

            if(res.data.admin){
                document.cookie = `token=Bearer ${res.data.admin}`;
                setUserInfo(res.data.admin_data);
                setToken(document.cookie.split("=")[1]);
                window.location.replace('/admin/home');
            }else{
                setSnackOpen(true);
                const msgBox = document.getElementById("showmsg");
                msgBox.style.display = "block"
        
            }
            
        })
            
        } catch (error) {
            console.log(error);
        }
        
    }

  return (
    <center>
        <>
                <div id="showmsg" className='showmsg hidden absolute opacity-90 p-3 top-28 right-1 '>
                <Snackbar open={snackOpen} autoHideDuration={6000} onClose={()=>{
                    setSnackOpen(false)}} 
                    sx={{ width: '100%' }}>
                <Alert severity="error" variant="filled" >{msg}</Alert>
                </Snackbar>
                </div>
                </>
                <h1 className='font-bold border-2 text-white border-white '>Login</h1>
                <br/> 
    <div className='p-10 text-white border-2 border-white bg-black rounded-2xl' style={{'width':'400px'}}>
       
    <br/> 
        <input 
        placeholder='Username'
        style={{'background':"none","border":"2px solid rgb(245 158 11)","transitionDuration":'2s','width':'100%','height':'70px','padding':'10px','borderRadius':'5px'}}
        onChange={e=>{setUsername(e.target.value)}}/><br/><br/>

        <input 
        placeholder='Password'
        style={{'background':"none","border":"2px solid rgb(245 158 11)","transitionDuration":'2s','width':'100%','height':'70px','padding':'10px','borderRadius':'5px'}}
        onChange={e=>{setPassword(e.target.value)}}/><br/><br/>

        <Button variant='contained' onClick={e=>handleLogin()}>Login</Button>
        <br/><br/>

        <Typography variant='body1'>Not a Member?<Link to='/admin/signup'> Sign Up Here</Link></Typography>
    </div>
    </center>
  )
}

export default Login