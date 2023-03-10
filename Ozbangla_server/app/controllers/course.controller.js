const { date } = require("joi");
const Course = require("../models/course.model.js");
const course_services = require('../service/course_services')

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

    await course_services.courseCreate(course, (err, data) => {
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
    await course_services.courseList(req.query ,(err, paginated_data)=> {
      if (err){
        res.status(500).send({
          message: "Some error occurred while creating the Course."
          });
      }else{
        let data = paginated_data.data.map(course => ({...course, thumbnail_url: req.protocol+'://'+req.headers.host+course.thumbnail }))
        paginated_data.data = data
        res.status(200).send({
          message: "Course list",
          data:paginated_data
        });
      }
    });
   } catch (error) {
      res.status(500).send({
        message: "Something error occoured , please check data input correctly"
      });
   }
};

exports.courseDetails =async(req, res) =>{
  
    await course_services.courseDetails(req.query,(err, results)=>{
      if (err){
        res.status(500).send({
          message: "Some error occurred while getting course details."
          });
      }else{
        res.status(200).send({
          message: "Course details",
          result:results[0]
        });
      }
    })
 
}
