const express = require('express')
const route = require('./routes/route.js') 
const mongoose = require('mongoose')
const app = express()


app.use(express.json())


mongoose.connect('mongodb+srv://Salman:g0Yrkp0tTQ2sVPBP@cluster0.eekagxa.mongodb.net/group38Database',{
    useNewUrlParser:true
})
.then(() => console.log("Mongodb is connected"))
.catch(err => console.log("Error",err)) 

app.use('/',route)

app.listen(process.env.PORT || 3000,function(){
    console.log("Express app running on port"+ (process.env.PORT|| 3000) )
})

app.use('/*',function(req,res){
    return res.status(404).send({staus:false, message:"Path not found(Invalid Url)"})
})