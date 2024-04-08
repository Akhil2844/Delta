const { error } = require("console");
const express=require("express");
const app=express();
const path=require("path")


const port=8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/CSS")));
app.use(express.static(path.join(__dirname,"/public/JS")));

app.set("view engine","ejs"); 
app.set("views",path.join(__dirname,"/views"))
app.get("/",(req,res)=>
{
    // res.send("This is root")
    res.render("home.ejs")
}) 

app.get("/hello",(req,res)=>  
{
    res.send("Hello")
   
}) 


app.get("/rolldice",(req,res)=>  
{
    let dicVal=Math.floor(Math.random()*6)+1;
    res.render("dice.ejs",{dicVal})
   
}) 

app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
});

app.get("/ig/:username",(req,res)=>{
    // const followers=["aakhil","varun","aryan"]
    let {username}=req.params;

    const instaData=require("./data.json")
    const Data=instaData[username]
    // console.log(Data)
    if(Data)
    {
        res.render("instagram.ejs",{Data})
    }
    else
    {
        res.render("error.ejs")
    }
   
    })