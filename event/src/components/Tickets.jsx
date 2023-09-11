import { Button, Typography } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'



function Tickets({events}) {
 
  const nav = useNavigate();

  const HandleCheckout = (id) =>{
     axios.post('http://localhost:3000/create-checkout-session',{id:id}).then((res)=>{
      console.log(res.data.url);
      location.replace(res.data.url)
    })
  }

  return (
   <>
   
    <div className=' text-amber-500 flex flex-wrap justify-center p-5'>
        
        {events.map(t=>(
            <>
            <div key={t._id} className='border-amber-400 border-2 border-solid m-2 p-5 w-96 hover:bg-amber-400 hover:text-black duration-300'>
            <Typography variant='h3'>{t.name}</Typography>
            <Typography variant='h6'>{t.description}</Typography><br/><br/>
            <Typography variant='h6' >Price : {t.price}</Typography><br/>
            <div>
              <button onClick={e=>HandleCheckout(t._id)} className='buy_button text-xl p-2 px-8 border-2 border-white' style={{'borderRadius':'1.5rem'}}><p>BUY</p>  </button>
              </div>
            <br/>
            </div>
            </>
        ))}
    </div>
    </>
  )
}

export default Tickets

