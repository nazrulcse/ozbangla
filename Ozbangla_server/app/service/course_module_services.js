const sql = require("../models/db");

const courseModuleCreate = async(course_module, result) => {
    await sql.query("INSERT INTO course_modules SET ?", course_module, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, { id: res.insertId, ...course_module });
    });
};

const courseModuleList = async(result) => {
   await sql.query("SELECT * FROM course_modules;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      result(null, res);
  });
};

module.exports = {
    courseModuleCreate,
    courseModuleList
};
  