const Express=require("express");
const app=Express();
const bodyParser=require("body-parser");
const {MongoClient}=require("mongodb");
const Cors=require("cors");
const connectDB = require("./MongoDB");
app.use(Cors({origin:"http://localhost:3000",credentials:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/logInData",async (req,res)=>{
    const db=await connectDB;
    const collection=db.collection("User-info");
    const f=collection.find();
    const arr=await f.toArray();
    res.json(arr);
})


app.listen(4000,()=>{
    console.log("Backend is running on port 4000");
})