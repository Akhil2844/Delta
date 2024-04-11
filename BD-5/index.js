const express = require("express");
const app = express();
const methodOverride = require("method-override");
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
uuidv4();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuidv4(),
    username: "Akhil kumar",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "Varun",
    content: "Hard work is important to achieve success",
  },
  {
    id: uuidv4(),
    username: "Rahul",
    content: "I got selected form  my 1st internship",
  },
];

app.get("/posts", (req, res) => {
  // res.send("Server working on port :8080");
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("ew.ejs");
});

app.post("/posts", (req, res) => {
  // console.log(req.body)
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ username, content, id });

  // res.send("post request working")
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  //    console.log(id);
  let post = posts.find((p) => id === p.id);

  // console.log(post);
  //    res.send("request working")
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  // console.log(id);
  let newContent = req.body.content;
  //    console.log(newContent);
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("listening on port : 8080");
});
