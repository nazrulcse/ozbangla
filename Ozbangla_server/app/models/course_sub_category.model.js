const sql = require("./db.js");

const CourseSubCategory = function(subCategory) {
    this.course_category_id = subCategory.course_category_id
    this.name = subCategory.name;
    this.details = subCategory.details;
  };

CourseSubCategory.create = (category, result) => {
    sql.query("INSERT INTO course_sub_categories SET ?", category, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        console.log("created course_sub_categories: ", { id: res.insertId, ...category });
        result(null, { id: res.insertId, ...category });
    });
};

CourseSubCategory.list = (result) => {
  sql.query("SELECT * FROM course_sub_categories;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      console.log("course course_sub_categories list : ", res);
      result(null, res);
  });
};

module.exports = CourseSubCategory;