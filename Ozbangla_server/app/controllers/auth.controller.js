const db = require("../models");
const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const User = require("../models/user.model");
const sql = require("../models/db");

exports.signup = async(req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const user = new User({
      username: req.body.username,
      name:req.body.name,
      contact_no:req.body.contact_no,
      email: req.body.email,
      gender: req.body.gender,
      email_verified:0,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    await User.create(user, (err, data) => {
        if (err){
          res.status(500).send({
            message:
                err.message || "Some error occurred while creating the user."
            });
        }
        res.status(200).send({
          message: "User created, ",
          user:data
          });
    });
  } catch (error) {
    res.status(500).send({
      message:
          err.message || "Some error occurred while creating the user."
      });
  }
  
};

exports.signin = async(req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    await User.find(req.body.email, (err, data) => {
      if (data === null){
        res.status(500).send({
          message:"un-authoriesd email or password"
        });
        return;
      }else{
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            data[0].password
          );
  
          if (!passwordIsValid) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
          }
  
          var token = jwt.sign({ id: data[0].id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });
  
          var isAdmin = data[0].role ? true : false;
  
          res.status(200).send({
            id: data[0].id,
            name: data[0].name,
            email: data[0].email,
            accessToken: token,
            isAdmin
          });
      }
      });
  
  } catch (error) {
    res.status(500).send({
      message: "Something error occoured , please check data input correctly"
    });
  }
  
};
