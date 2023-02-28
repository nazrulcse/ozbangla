const sql = require("./db.js");

const Course = function(course) {
    this.title = course.title;
    this.description = course.description;
    this.price = course.price;
    this.user_id = course.user_id,
    this.course_category_id = course.course_category_id,
    this.thumbnail = course.thumbnail,
    this.course_url = course.course_url
  };

Course.create = (newCourse, result) => {
    sql.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, { id: res.insertId, ...newCourse });
    });
};

Course.list = (result) => {
  sql.query("SELECT * FROM courses;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      console.log("course list : ", res);
      result(null, res);
  });
};

module.exports = Course;