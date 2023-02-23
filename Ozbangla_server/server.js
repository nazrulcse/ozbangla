const config =  require('./config');
const path =require('path');

const express = require("express");
global.__basedir = __dirname;

var bodyParser = require('body-parser')
console.log(`NODE_ENV=${config.NODE_ENV}`)

const cors = require("cors");

const app = express();

app.use("/uploads/course_lessons", express.static(__basedir+'/app/uploads/course_lessons'));
app.use("/uploads/courses", express.static(__basedir+'/app/uploads/courses'));

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// database
const db = require("./app/models");
// const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// routes
require('./app/routes/index.routes')(app);
// set port, listen for requests

app.listen(config.PORT, config.HOST, () => {
  console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})
// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });

//   Role.create({
//     id: 2,
//     name: "moderator"
//   });

//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }
