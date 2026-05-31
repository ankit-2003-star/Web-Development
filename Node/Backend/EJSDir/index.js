const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// app.use(express.static("public")); // Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public/css"))); // Serve static files from the "public" directory using path.join for better compatibility
app.use(express.static(path.join(__dirname, "public/js"))); // Serve static files from the "public" directory using path.join for better compatibility
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Set the directory for EJS templates

app.get("/", (req, res) => {
  // res.send('Hello World!');
  res.render("home.ejs");
});
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/ig/:username", (req, res) => {
  // let username = req.params.username;
  // res.send(`This is the profile of ${username}`);
  //let { username } = req.params; // Destructuring assignment
  // const followers = ['user1', 'user2', 'user3'];
  // let { username } = req.params;
  // res.render('instagram.ejs', {username, followers});
  let { username } = req.params;
  const instData = require("./data.json");
  const data = instData[username];
  // console.log(data);
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.status(404).send("User not found");
  }
});

app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num: diceValue });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
