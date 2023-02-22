var express = require('express');
const ContactUs = require('../models/ContactUs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/contactUs",async (req,res)=>{
  const {
    name,email,subject,message
  }=req.body;
  console.log(req.body);
  if(!name||!email||!subject||!message){
    return res.send({
      msg:"All feilds are required",
      status:400
    });
  }
  const user=new ContactUs({name,email,subject,message});
  await user.save();
  return res.send({
    msg:"Record Added successfully",
    status:200
  });
  
})

module.exports = router;
