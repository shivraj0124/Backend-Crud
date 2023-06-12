const express = require('express');
const app=express();
const cors =require('cors');


app.use(cors({
    orgin:'*'
}));

const mongoose = require('mongoose');

const DB ="mongodb+srv://shivraj:Sk5678@cluster0.ajlaoxj.mongodb.net/ReactBackend?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection successfull...');
}).catch((err)=> console.log('no connection'));
 

const postRoute=require('./routes/post_route');
app.use('/api',postRoute);

app.listen(8000,()=>{
    console.log("Server is running");
})

