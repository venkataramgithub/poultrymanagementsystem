const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const connection=require("./connection");
const poultryregister=require("./route/poultryregister");

const app=express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/",poultryregister);

const port=process.env.PORT||3000;
app.listen(port,()=>{
	console.log("application is running on the http://localhost:3000");
});