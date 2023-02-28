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
    const { page ,size } = query;
    let {limit , offset } = getPagination(page,size)

    await sql.query(`SELECT * FROM courses LIMIT ${limit} OFFSET ${offset};`, async(err, res) => {
        if (err) {
          result(err, null);
        return;
        }
        
       await sql.query(`SELECT COUNT(*) as total FROM courses`, (err, res_count) => {
            if (err) {
              result(err, null);
            return;
            }
            const { paginated_data } = getPagingData(res, page, limit, res_count[0].total);
            result(null, paginated_data );
        });
  });  
};


module.exports = {
    courseCreate,
    courseList
};
  