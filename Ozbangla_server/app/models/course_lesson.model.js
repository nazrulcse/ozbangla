const sql = require("./db.js");

const CourseLesson = function(course_lesson) {
    this.course_id = course_lesson.course_id;
    this.course_module_id = course_lesson.course_module_id;
    this.name = course_lesson.name;
    this.details = course_lesson.details;
    this.url = course_lesson.url;
    this.thumbnail = course_lesson.thumbnail;
  };
  
CourseLesson.create = (course_lesson, result) => {
    sql.query("INSERT INTO course_lessons SET ?", course_lesson, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, { id: res.insertId, ...course_lesson });
    });
};

CourseLesson.list = (result) => {
  sql.query("SELECT * FROM course_lessons;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      result(null, res);
  });
};

module.exports = CourseLesson;