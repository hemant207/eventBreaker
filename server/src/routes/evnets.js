const express = require('express');
const adminAuth = require('../middleware/auth');
const { event } = require('../database/db');

const router = express.Router();



router.get('/',async (req,res)=>{

    const foundEvents = await event.find();
    res.send({'events':foundEvents});
})

module.exports =  router;