const sql = require("../models/db");

const courseCreate = (newCourse, result) => {
    sql.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, { id: res.insertId, ...newCourse });
    });
};

const courseList = (result) => {
    sql.query("SELECT * FROM courses;", (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        console.log("course list : ", res);
        result(null, res);
    });
  };
module.exports = {
    courseCreate,
    courseList
};
  