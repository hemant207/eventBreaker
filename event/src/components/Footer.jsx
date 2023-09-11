import { Typography } from '@mui/material'
import React from 'react'
import Partners from './Partners'

function Footer() {
  return (
    <div className='p-3 bg-black relative text-white bottom-0 '>
        <div className='topFooter m-3 h-1/2 border-solid border-2 '>
            <div>
                <h1 className="text-2xl text-center font-bold">PARTNERS</h1>
                <div>
                    <Partners/>
                </div>
            </div>
        </div>

        <center>
        <div className='bottomFooter m-3 h-1/2 border-solid border-2 flex flex-wrap justify-around pt-20 pb-20 text-xl md:text-2xl'>
            <div className='footerLinks1 m-5'>
                    <ul>
                        <li>
                        TICKETS
                        </li>
                        <li>
                        NEWS
                        </li>
                        <li>
                        INFO
                        </li>
                    </ul>
            </div>

                <div className='footerLinks2 m-5'>
                    <ul>
                        <li>
                        PRIVACY
                        </li>
                        <li>
                        COOKIES
                        </li>
                        <li>
                        TERMS + CONDITIONS
                        </li>
                    </ul>
                </div>
                <div className='pt-2'>
                    <Typography variant='h5' className='text-amber-500'>
                    <b>EventBraker Festival is a mammoth rock event,</b><br/>
                    </Typography>

                    <Typography variant='body1' >
                    based at the spiritual home of rock Donington Park.
                    </Typography>
                    
                    <br/>
                    
                    <Typography variant='h6' className='text-amber-500'>
                    THE UK'S PREMIER ROCK FESTIVAL<br/>
                    </Typography>

                    <Typography variant='body1'>
                    14 — 16 JUNE 2024, DONINGTON PARK
                    
                    </Typography>

                    <br/>
                    <Typography variant='body2'>
                    SUBJECT TO LICENCE, BILL SUBJECT TO CHANGE — © DOWNLOAD 2023
                    </Typography>

                </div>
            
        </div>
        </center>

    </div>
  )
}

export default Footer