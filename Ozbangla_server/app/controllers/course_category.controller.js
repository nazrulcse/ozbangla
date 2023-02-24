const db = require("../models");
const config = require("../config/auth.config");
const CourseCategories = require("../models/course_category.model");
const { getPagination, getPagingData }  = require('../helpers/pagination');


exports.create = async(req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const courseCategories = new CourseCategories({
      name: req.body.name,
      category_url: req.body.category_url,
    });

    await CourseCategories.create(courseCategories, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
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
    await CourseCategories.list( (err, data) => {
      if (err)
        res.status(500).send({
          message: "Some error occurred while creating the Course."
          });
      else 
        res.status(200).send({
          message: "Course Category list",
          data:data
        });
    });
  } catch (error) {
    res.status(500).send({
      message: "Something error occoured , please check data input correctly"
    });
  }
};

exports.subCategoriesOfCourses = async(req, res) => {
  try {
    await CourseCategories.subCategoriesOfCourses( (err, data) => {
      if (err)
        res.status(500).send({
          message: "Some error occurred while creating the Course."
          });
      else 
        res.status(200).send({
          message: "Sub Categories list by category",
          data:data
        });
    });
  } catch (error) {
    res.status(500).send({
      message: "Something error occoured , please check data input correctly"
    });
  }
  
}