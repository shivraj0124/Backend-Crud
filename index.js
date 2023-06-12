const express = require('express');
const app=express();
const cors =require('cors');


app.use(cors({
    orgin:'*'
}));

const mongoose = require('mongoose');
var DB = mongoose.set('strictQuery',false);
var DB ="mongodb+srv://shivraj:Sk5678@cluster0.ajlaoxj.mongodb.net/ReactBackend?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(DB,options).then(()=>{
    console.log('Connection successful...');
}).catch((err)=> console.log(err));
 

const postRoute=require('./routes/post_route');
app.use('/api',postRoute);

app.listen(7000,()=>{
    console.log("Server is running");
})

