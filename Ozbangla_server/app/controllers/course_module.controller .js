const db = require("../models");
const config = require("../config/auth.config");
const CourseModule = require("../models/course_module.model");
const { getPagination, getPagingData }  = require('../helpers/pagination');


exports.create = async(req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Course Category
    const courseModule = new CourseModule({
      name: req.body.name,
      course_id: req.body.course_id,
      details:req.body.details
    });

    CourseModule.create(courseModule, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the course module."
            });
        else res.send(data);
    });

};



exports.list = async(req, res) => {
 
  CourseModule.list( (err, data) => {
    if (err)
      res.status(500).send({
        message: "Some error occurred while creating the course module."
        });
    else 
      res.status(200).send({
        message: "Course module list",
        data:data
      });
  });

};