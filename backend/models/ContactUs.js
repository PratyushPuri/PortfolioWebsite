const { default: mongoose } = require("mongoose");


const ContactUsSchema=mongoose.Schema;
let ContactUsModel=new ContactUsSchema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }

});
 
const ContactUs=mongoose.model("User",ContactUsModel);
module.exports = ContactUs
