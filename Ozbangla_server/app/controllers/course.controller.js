const { date } = require("joi");
const Course = require("../models/course.model.js");


exports.create = async(req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Course 
    const course = new Course({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      user_id: req.body.user_id,
      course_category_id: req.body.course_category_id,
      course_sub_category_id:req.body.course_sub_category_id,
      thumbnail: '/uploads/courses/'+req.file.filename,
      course_url: req.body.title.replace(/\W+/g, '-')
    });

    await Course.create(course, (err, data) => {
      if (err){
        res.status(500).send({
          message: "Some error occurred while creating the Course."
          });
      }else{
        let results = {...data, thumbnail_url: req.headers.host+ data.thumbnail}
        res.status(200).send({
          message: "Course created",
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


exports.list = async(req, res) => {
   try {
    await Course.list( (err, data) => {
      if (err){
        res.status(500).send({
          message: "Some error occurred while creating the Course."
          });
      }else{ 
        let results = data.map(course => ({...course, thumbnail_url: req.headers.host+course.thumbnail }))
        res.status(200).send({
          message: "Course list",
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