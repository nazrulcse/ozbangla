const sql = require("../models/db");
const { getPagination, getPagingData }  = require('../helpers/pagination');

const courseCreate = async(newCourse, result) => {
    await sql.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        result(null, { id: res.insertId, ...newCourse });
    });
};

const courseList = async(query, result) => {
    const { page ,size,title } = query;
    let {limit , offset } = getPagination(page,size)
    await sql.query(`SELECT * FROM courses where title LIKE '%${title ? title : ''}%' LIMIT ${limit} OFFSET ${offset};`, async(err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        
        await sql.query(`SELECT COUNT(*) as total FROM courses where title LIKE '%${title ? title : ''}%'`, (err, res_count) => {
            if (err) {
              result(err, null);
            return;
            }
            const { paginated_data } = getPagingData(res, page, limit, res_count[0].total);
            result(null, paginated_data );
        });
    });  
};

const courseDetails = async(data,result) => {
  const { slug,id } = data; 
  let query = slug ? `SELECT * FROM courses where course_url='${slug}';` : `SELECT * FROM courses where id='${id}';`
  await sql.query(query, (err, res) => {
     if (err) {
       result(err, null);
     return;
     }
     result(null, res);
 });
};

module.exports = {
    courseCreate,
    courseList,
    courseDetails
};
  