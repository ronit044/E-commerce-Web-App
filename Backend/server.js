const Express=require("express");
const app=Express();
const bodyParser=require("body-parser");
const {MongoClient}=require("mongodb");
const uri="mongodb+srv://ronitsharma3870:ashu6608@cluster0.rtstlsp.mongodb.net/?retryWrites=true&w=majority";
const Cors=require("cors");
app.use(Cors({origin:"http://localhost:3000",credentials:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
