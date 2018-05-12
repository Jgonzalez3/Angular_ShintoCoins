var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var session = require('express-session');
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use bodyParser!
app.use(bodyParser.json());
// static content
app.use(express.static(path.join(__dirname, "./Shinto/dist/Shinto")));
app.use(session({
    secret: 'codingdojorocks',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

const flash = require('express-flash');
app.use(flash());
app.all("*", (req,res,next)=>{
    res.sendFile(path.resolve("./Shinto/dist/Shinto/index.html"))
})
require("./server/config/routes")(app);
app.listen(8000, () => {
    console.log("listening to port 8000");
})