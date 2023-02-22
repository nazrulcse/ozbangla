const sql = require("./db.js");

const CourseCategories = function(category) {
    this.name = category.name;
    this.category_url = category.category_url;
  };

CourseCategories.create = (category, result) => {
    sql.query("INSERT INTO course_categories SET ?", category, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        console.log("created category: ", { id: res.insertId, ...category });
        result(null, { id: res.insertId, ...category });
    });
};

CourseCategories.list = (result) => {
  sql.query("SELECT * FROM course_categories;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      console.log("course category list : ", res);
      result(null, res);
  });
};

module.exports = CourseCategories;