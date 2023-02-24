const db = require("../models");
const config = require("../config/auth.config");
const CourseLesson = require("../models/course_lesson.model");
const { getPagination, getPagingData }  = require('../helpers/pagination');

exports.create = async(req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    
    const courseLesson = new CourseLesson({
      course_id: req.body.course_id,
      course_module_id: req.body.course_module_id,
      name: req.body.name,
      details:req.body.details,
      url:req.body.url,
      thumbnail:'/uploads/course_lessons/'+req.file.filename,
    });

    await CourseLesson.create(courseLesson, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the course lesson."
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
    await CourseLesson.list( (err, data) => {
      if (err){
        res.status(500).send({
          message: "Some error occurred while creating the course lesson."
          });
      }else{ 
        let results = data.map(lesson => ({...lesson, thumbnail_url: req.headers.host+lesson.thumbnail }))
        res.status(200).send({
          message: "Course lesson list",
          data:results
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: "Something error occoured , please check data input correctly"
    });
  }
};