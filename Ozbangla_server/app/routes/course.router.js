
const express = require('express')
const router = express.Router()
const { authJwt } = require("../middleware");
const controller = require("../controllers/course.controller");
// middleware that is specific to this router
const { verifySignUp } = require("../middleware");
const { uploadCourseThumbnailMiddleware } = require("../middleware/upload");
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post("/", [authJwt.verifyToken,authJwt.isAdmin], uploadCourseThumbnailMiddleware, controller.create);
router.get("/list",  controller.list);
router.get("/details",controller.courseDetails);
// router.put("/:id",controller.update);
// router.delete("/:id",controller.delete);

module.exports = router
