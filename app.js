const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {

  dayName = date.seeDate();

  res.render("list", {listTitle: dayName, newListItems: items});
});

app.post("/", (req,res) => {
  console.log(req.body);
  var item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", {listTitle: "Work List", newListItems: workItems})
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about");

});
