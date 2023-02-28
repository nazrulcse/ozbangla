const sql = require("../models/db");

const courseCategoryCreate = async(category, result) => {
    await sql.query("INSERT INTO course_categories SET ?", category, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        console.log("created category: ", { id: res.insertId, ...category });
        result(null, { id: res.insertId, ...category });
    });
};

const courseCategoryList = async(result) => {
  await sql.query("SELECT * FROM course_categories;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      console.log("course category list : ", res);
      result(null, res);
  });
};

const courseSubcategoriesOfCourses = async(result) => {

  await sql.query("SELECT course_sub_categories.id, course_sub_categories.name as sub_category_name,course_sub_categories.details as sub_category_details, course_categories.name as category_name,course_categories.visibility  FROM course_sub_categories LEFT JOIN course_categories ON course_sub_categories.course_category_id = course_categories.id GROUP BY id;", (err, res) => {
      if (err) {
        result(err, null);
      return;
      }
      result(null, res);
  });
};

module.exports = {
    courseCategoryCreate,
    courseCategoryList,
    courseSubcategoriesOfCourses
};
  