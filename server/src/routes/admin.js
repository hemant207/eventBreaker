const express = require('express');
const adminAuth = require('../middleware/auth');
const { admin, event } = require('../database/db');
const jwt  = require('jsonwebtoken');


const router = express.Router();

router.get('/me', adminAuth, (req, res) => {
    // req.user_id is set if authentication is successful
    res.json({ "message": 'Protected route accessed', "user_id": req.headers.user_id,"admin_data":req.user});
  });


router.post('/signup',async (req,res)=>{
    const admin_Data = req.body;
    console.log(admin_Data);
    const username = admin_Data.username;

    const foundAdmin = await admin.find({username});

    if(foundAdmin.length===0){
        const newAdmin = new admin(admin_Data);
        newAdmin.save();
        res.send({"message":"new admin added suceessfully"});
    }else{
        res.send({"message":"Admin already exists"})
    }

})

router.post('/login',async (req,res)=>{
    const admin_Data = req.body;
    const username = admin_Data.username;
    const password = admin_Data.password;

    const foundAdmin = await admin.findOne({username,password});
    if(foundAdmin){
        const data11 = foundAdmin.toJSON();
        const token = jwt.sign(data11,process.env.sec_key);
        res.cookie('token',token, {
            httpOnly: true,
            sameSite:'none',
            // Add other cookie options like 'expires' or 'maxAge' if needed
          });        

        res.send({"message":"Admin login successfully","admin":token,"admin_data":foundAdmin});
    }else{
        res.send({"message":"Incorrect password or username"});
    }

})

router.get('/events',adminAuth,async (req,res)=>{
    const admin_id = req.headers.user_id;
    console.log(admin_id);

    if(admin_id){
        const foundEvents = await event.find({"organiser_id":admin_id});
        res.status(200).send({'events':foundEvents});
    }else{
        res.status(401).send({"message":"user is not login"});
    }
    
})

router.get('/event/:id',adminAuth,async (req,res)=>{
    const event_id = req.params.id;

    const foundEvent = await event.findById(event_id);
    if(foundEvent){
        res.send({"events":foundEvent});
    }else{
        res.send({"message":"no such event finds"})
    }
})

router.get('/logout',async(req,res)=>{
    res.clearCookie("token");
    res.send({"message":"logouted"})
})

router.put('/event/:id',adminAuth,async (req,res)=>{
    const event_id = req.params.id;
    const data = req.body;

    const foundEvent = await event.findByIdAndUpdate(event_id,data,{new:true});
    if(foundEvent){
        res.send({"events":foundEvent});
    }else{
        res.send({"message":"no such event finds"})
    }
})

router.delete('/event/:id',adminAuth,async (req,res)=>{
    const event_id = req.params.id;
    try {
        const foundEvent = await event.findByIdAndDelete(event_id);
        if(foundEvent){
            res.send({"events":foundEvent});
        }else{
            res.send({"message":"no such event finds"})
        }
    } catch (error) {
        console.log(error);
        res.send({"message":"something went wrong"});
    }
})


router.post('/addevent',adminAuth,async (req,res)=>{
    const admin_id = req.headers.user_id;
    console.log("add event request :" + admin_id);

    const rec_data = req.body;
    console.log(rec_data);

    if(admin_id){
        const newEvent = new event(rec_data);
        newEvent.save();
        res.status(200).send({"message":"event added successfully",'events':rec_data});
    }else{
        res.send({"message":"user is not login"});
    }
    
})

module.exports =  router;