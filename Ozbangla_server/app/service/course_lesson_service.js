const sql = require("../models/db");

const courseLessonCreate = async(course_lesson, result) => {
    await sql.query("INSERT INTO course_lessons SET ?", course_lesson, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, { id: res.insertId, ...course_lesson });
    });
};

const courseLessonList = async(result) => {
    await sql.query("SELECT * FROM course_lessons;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      result(null, res);
  });
};

module.exports = {
    courseLessonCreate,
    courseLessonList
};
  