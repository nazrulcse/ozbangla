const sql = require("./db.js");

const CourseModule = function(CourseModule) {
    this.course_id = CourseModule.course_id
    this.name = CourseModule.name;
    this.details = CourseModule.details;
  };

CourseModule.create = (course_module, result) => {
    sql.query("INSERT INTO course_modules SET ?", course_module, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, { id: res.insertId, ...course_module });
    });
};

CourseModule.list = (result) => {
  sql.query("SELECT * FROM course_modules;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      result(null, res);
  });
};

module.exports = CourseModule;