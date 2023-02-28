const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, __basedir + "/app/uploads/course_lessons");
//   },
//   filename: (req, file, cb) => {
//     console.log('origin file',`${new Date().getTime().toString()}-${file.originalname}`);
//     cb(null, `${new Date().getTime().toString()}-${file.originalname}`);
//   },
// });

// let uploadFile = multer({
//   storage: storage,
//   limits: { fileSize: maxSize },
// }).single("thumbnail");

// let uploadFileMiddleware = util.promisify(uploadFile);


const filename =(req,file,cb)=>{
    cb(null, `${new Date().getTime().toString()}-${file.originalname}`);
}

let storeCourseLessonThumbnail = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/app/uploads/course_lessons");
  },
  filename:filename
}) 

let storeCourseThumbnail = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/app/uploads/courses");
  },
  filename:filename
}) 

let uploadCourseLessonThumbnail = multer({
  storage: storeCourseLessonThumbnail,
  limits: { fileSize: maxSize },
}).single("thumbnail");

let uploadCourseThumbnail = multer({
  storage: storeCourseThumbnail,
  limits: { fileSize: maxSize },
}).single("thumbnail");

let uploadCourseLessonThumbnailMiddleware = util.promisify(uploadCourseLessonThumbnail);
let uploadCourseThumbnailMiddleware = util.promisify(uploadCourseThumbnail);
module.exports = { uploadCourseLessonThumbnailMiddleware, uploadCourseThumbnailMiddleware };
