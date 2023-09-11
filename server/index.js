const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const eventRouter = require('./src/routes/evnets.js')
const adminRouter = require('./src/routes/admin.js')
const cookieParser = require('cookie-parser');
const { default: mongoose } = require('mongoose');
const { event } = require('./src/database/db.js');
const { default: Stripe } = require('stripe');

mongoose.connect(process.env.mongoose_uri).then((err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log("database connected...")
    }
})

const corsOptions ={
    credentials: true, // Allow credentials (cookies)
}

app.use(cookieParser());
app.use(express.json())
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
app.use('/events',eventRouter);
app.use('/admin',adminRouter);

app.get('/',(req,res)=>{
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
  res.send();
    res.send({"Hello from the server":"your IP is: " + req.ip})
})

app.post('/create-checkout-session', async (req, res) => {

    item_id = req.body.id;

    console.log("item: " + item_id);
    const foundEvent = await event.findById(item_id);

    try{
        const session = await stripe.checkout.sessions.create({
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price_data:{
                  currency:'gbp',
                  product_data:{
                      name:foundEvent.name ,
                  },
                  unit_amount : foundEvent.price*100,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `https://eventbreaker.vercel.app/success`,
            cancel_url: `https://eventbreaker.vercel.app/canceled`
          });
          res.json({"url":session.url});
       
    }catch(error){
        console.log(error);
        res.json({"url":'404'});
    }
    
});
    
  
  

app.listen(process.env.port,()=>{
    console.log('server is running on port 3000')
}) 
