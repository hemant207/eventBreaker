import { Flag, Menu } from '@mui/icons-material';
import React, { useState } from 'react'
import '../App.css'
import {  useNavigate } from 'react-router-dom';


function Header() {
    const [open,setOpen] = useState(false);
    const nav = useNavigate();

    const showDrawer = (open) =>{
        if(open){
            document.getElementById("mySidenav").style.width = "0px";
        }else{
            document.getElementById("mySidenav").style.width = "300px";
        }
    }
  return (
    <>
    <div className='header fixed z-10 w-full md:mx-auto display: flex justy justify-between p-3 bg-black text-slate-50 h-24 self-center'>
        <div className='header_logo' onClick={()=>{nav('/')}}>
            <h1 className="text-5xl font-bold  text-slate-50">
                EventBreaker
            </h1>
        </div>

        <div className='header_left text-center display: flex justify-around space-x-5'>
            <div className='hidden md:flex space-x-5  '>
                <div className='text-slate-50 text-4xl font-bold'>
                202 <br/>
                <div className='text-amber-500 text-lg'>DAYS</div>
                </div>

                <div className='text-slate-50 text-4xl font-bold'>
                10 <br/> 
                <div className='text-amber-500 text-lg'>HRS</div>
                </div>

                <div className='text-slate-50 text-4xl font-bold'>
                55 <br/> 
                <div className='text-amber-500 text-lg'>MINS</div>
                </div>

            </div>
           

            <div className='header_menu p-3'>
                <div onClick={async ()=>{
                    console.log(open)
                    setOpen(!open);
                    showDrawer(open);  
                  
                }}>
                    {open?<h1 className='menu_btn relative text-2xl'>🗙</h1>:<Menu className='menu_btn' fontSize="large"/>}</div>
                    <div id="mySidenav" className="sidenav text-amber-500">
                        <button onClick={()=>{nav('/')}}>Home</button>
                        <button onClick={()=>{nav('/tickets')}}>Event Tickets</button>
                        <button className="admin_btn" onClick={()=>{nav('/admin')}}>Admin Portle</button>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header