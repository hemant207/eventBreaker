const jwt = require('jsonwebtoken');
const { admin } = require('../database/db');


const adminAuth = async (req,res,next) =>{

  const authHeader = req.headers.authorization;
  //const token1 = req.cookies.token;
  //console.log(token1)

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.substring(7);
  console.log(token);
  
    try {
      const data = jwt.verify(token,process.env.sec_key);
      console.log(data);
      const username = data.username;
      const verifyAdmin = await admin.findOne({username});
      if(verifyAdmin){
        req.user = data;
        req.headers.user_id = verifyAdmin._id;  
        next();
      }
      
    } catch (error) {
      console.log(error);
      res.send({"message":"Admin Unaurthorized"})
    }
    
  }

module.exports = adminAuth;