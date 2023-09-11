import { Typography } from '@mui/material'
import React from 'react'

function Partners() {

    const companies = [
        {
            "name":'barclaycard',
            "logo":'https://downloadfestival.co.uk/wp-content/uploads/2019/09/barclaycard-2020.png',
        },
        {
            "name":'Nohrlund',
            "logo":'https://downloadfestival.co.uk/wp-content/uploads/2023/04/Nohrlund-320x200-1-320x200.png',
        },
        {
            "name":'co-op',
            "logo":'https://downloadfestival.co.uk/wp-content/uploads/2019/09/coop-2020.png',
        },
        {
            "name":'Pepsi Max',
            "logo":'https://downloadfestival.co.uk/wp-content/uploads/2019/09/pepsi-max-2020.png',
        },
        {
            "name":'Planet Rock',
            "logo":'https://downloadfestival.co.uk/wp-content/uploads/2022/11/planet-rock-320x200.png',
        },{
            "name":'ChargeCandy',
            "logo":'https://downloadfestival.co.uk/wp-content/uploads/2022/10/white320-320x200.png',
        }
    ]

  return (
    
    <div className=' flex flex-wrap justify-center lg:flex-nowrap'>
        {
            companies.map(c=>(
                <div key={c.name}>
                <img src={c.logo} width='50%' height='50%'/>
                <br/>
                </div>
            ))
        }
    </div>

    
  )
}

export default Partners