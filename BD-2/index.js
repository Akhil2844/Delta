 const express = require('express')
const app = express()

// console.dir(app)  //   tosee all the method
// const port = 3000; 
const port =8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use((req,res)=>
// {
//     // console.log(req);
//     console.log("request recieved");
//     // res.send("This is a basic response");
//     // res.send[{
//     //     name:"apple",
//     //     color:"red",
//     // }]
//   let code="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// })

// app.get("/",(req,res)=>
// {
//     res.send("you contacted root path")
// })

// app.get("/apple",(req,res)=>
// {
//     res.send("you contacted  apple path")
// })

// app.get("/orange",(req,res)=>
// {
//     res.send("you contacted akhil path")
// })

// app.get("*",(req,res)=>
// {
//     res.send("this path does not exist")
// })

// app.post("/",(req,res)=>
// {
//     res.send("you sent a post request to root")
// })

app.get("/",(req,res)=>
{
    res.send("hello, i am root")
});

app.get("/:username/:id",(req,res)=>
{
  let {username,id}=req.params;
   let htmlStr=`<h1>Welcome to the @${username}! </h1>`
   res.send(htmlStr)
})

app.get("/search",(req,res)=>
{
    // console.log(req.query);
    let {q}=req.query;
    if(!q)
    {
        res.send("<h1>Nothing Searched</h1>")
    }

    // res.send("no results")
    // res.send(`search results for query : ${q}`)
     res.send(`<h1>search results for query : ${q}</h1>`)

})