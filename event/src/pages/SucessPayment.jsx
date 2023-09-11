import { Typography } from '@mui/material'
import React from 'react'

function SucessPayment() {
  return (
    <div className='flex top-28 pt-28'>
    <div className="payment-success p-8 w-1/2 pt-28">
      <Typography variant='h2'>Payment Successful</Typography>
      <Typography variant='h6'>Your payment has been processed successfully.</Typography>
      <p>Thank you for your purchase!</p>
      {/* You can add additional content or actions here */}
    </div>
    <div className='w-1/2'><img src='https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png' /></div>
    </div>
  )
}

export default SucessPayment