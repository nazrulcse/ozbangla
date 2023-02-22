const { verifySignUp } = require("../middleware");
const authRoute = require('../routes/auth.routes')
const userRoute = require('../routes/user.routes')
const courseCategoryRoute = require('../routes/course-category.router')
const courseSubCategoryRoute = require('../routes/course-sub-category.router')
const courseModuleRoute = require('../routes/course-module.router')
const courseRoute = require('../routes/course.router')
const router = require("express").Router();

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.use("/api/auth", authRoute);
    app.use('/api/test', userRoute);
    app.use('/api/course-category', courseCategoryRoute);
    app.use('/api/course', courseRoute);
    app.use('/api/course-sub-category', courseSubCategoryRoute);
    app.use('/api/course-module', courseModuleRoute);

}