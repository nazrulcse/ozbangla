const db = require("../models");
const config = require("../config/auth.config");
const CourseModule = require("../models/course_module.model");
const { getPagination, getPagingData }  = require('../helpers/pagination');
const courseModuleServices  = require('../service/course_module_services');


exports.create = async(req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const courseModule = new CourseModule({
      name: req.body.name,
      course_id: req.body.course_id,
      details:req.body.details
    });
    await courseModuleServices.courseModuleCreate(courseModule, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the course module."
            });
        else res.send(data);
    });
  } catch (error) {
    res.status(500).send({
      message: "Something error occoured , please check data input correctly"
    });
  }
};



exports.list = async(req, res) => {
  try {
    await courseModuleServices.courseModuleList( (err, data) => {
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
  } catch (error) {
    res.status(500).send({
      message: "Something error occoured , please check data input correctly"
    });
  }
};