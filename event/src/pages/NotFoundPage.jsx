import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <center>    <div>
        <div className='min-h-screen pt-40 ' >
            <Typography variant='h2'>404 - Page not found</Typography>
            <br/>
            <br/>
            <Typography variant='h2'>The page you are looking for does not exist.</Typography>
            <br/>
            <br/>
            <div style={{'color':'blue'}}>
            <Link to='/' >Go to HomePage</Link><br/>
            <br/>
            <Link to='/ticket'>Go to event page</Link><br/>
            </div>
        </div>
      
    </div>
    </center>

  );
};

export default NotFoundPage;
