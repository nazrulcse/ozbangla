const CourseLesson = function(course_lesson) {
    this.course_id = course_lesson.course_id;
    this.course_module_id = course_lesson.course_module_id;
    this.name = course_lesson.name;
    this.details = course_lesson.details;
    this.url = course_lesson.url;
    this.thumbnail = course_lesson.thumbnail;
};

module.exports = CourseLesson;