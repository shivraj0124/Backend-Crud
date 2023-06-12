const express = require('express');
const app=express();
const cors =require('cors');


app.use(cors({
    orgin:'*'
}));

const mongoose = require('mongoose');

const DB ="mongodb+srv://shivraj:Sk5678@cluster0.ajlaoxj.mongodb.net/ReactBackend?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS:5000,
  connectTiomeoutMS:30000,
};
mongoose.connect(DB,options).then(()=>{
    console.log('Connection successfull...');
}).catch((err)=> console.log(err));
 

const postRoute=require('./routes/post_route');
app.use('/api',postRoute);

app.listen(8000,()=>{
    console.log("Server is running");
})

