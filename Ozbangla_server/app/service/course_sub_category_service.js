const sql = require("../models/db");

const courseSubCategoryCreate = async(category, result) => {
    await sql.query("INSERT INTO course_sub_categories SET ?", category, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, { id: res.insertId, ...category });
    });
};

const courseSubCategoryList = async(result) => {
    await sql.query("SELECT * FROM course_sub_categories;", (err, res) => {
        if (err) {
        result(err, null);
        return;
        }
        result(null, res);
    });
};


module.exports = {
    courseSubCategoryCreate,
    courseSubCategoryList
};
  