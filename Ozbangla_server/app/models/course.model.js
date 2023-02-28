const Course = function(course) {
    this.title = course.title;
    this.description = course.description;
    this.price = course.price;
    this.user_id = course.user_id,
    this.course_category_id = course.course_category_id,
    this.course_sub_category_id = course.course_sub_category_id,
    this.thumbnail = course.thumbnail,
    this.course_url = course.course_url
  };

module.exports = Course;