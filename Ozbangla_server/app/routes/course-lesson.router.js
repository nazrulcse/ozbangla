
const express = require('express')
const router = express.Router()
const { authJwt } = require("../middleware");
const controller = require("../controllers/course_lesson.controller");
// middleware that is specific to this router
const { verifySignUp } = require("../middleware");
const { uploadCourseLessonThumbnailMiddleware }  = require("../middleware/upload");


var multer = require('multer')
var multParse = multer()


router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}) 
// multParse.none()
router.post("/",[authJwt.verifyToken],uploadCourseLessonThumbnailMiddleware,controller.create);
router.get("/list",  controller.list);
// router.get("/:id",controller.findOne);
// router.put("/:id",controller.update);
// router.delete("/:id",controller.delete);

module.exports = router