const db = require("../models");
const config = require("../config/auth.config");
const CourseSubCategory = require("../models/course_sub_category.model");
const { getPagination, getPagingData }  = require('../helpers/pagination');


exports.create = async(req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Course Category
    const courseSubCategory = new CourseSubCategory({
      name: req.body.name,
      course_category_id: req.body.course_category_id,
      details:req.body.details
    });

    CourseSubCategory.create(courseSubCategory, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        else res.send(data);
    });

};



exports.list = async(req, res) => {
 
  CourseSubCategory.list( (err, data) => {
    if (err)
      res.status(500).send({
        message: "Some error occurred while creating the Course."
        });
    else 
      res.status(200).send({
        message: "Course sub category list",
        data:data
      });
  });

};