const Course = require('../models/Course');
const { mongooseToObject} = require('../../util/mongoose');



class CoursesController {
    // [GET] /courses 
    // index(req, res, next) {
    //   res.render('courses'); ///courses này là courses.hbs
    // }
  
    // [GET] /courses/:slug
    show(req, res, next) {
      Course.findOne({ slug: req.params.slug})
        .then((course) => {
            res.render('courses/show', { course: mongooseToObject(course) })
        })
        .catch(next)
    }

    // [CREATE] /courses/create
    create(req, res, next) {
      res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res, next) {
      const formData =  req.body;
      formData.image = `https://i.ytimg.com/vi/${formData.videoId}/maxresdefault.jpg`;
      const course = new Course(formData)
      course.save()
        .then(() => res.redirect('/'))
        .catch(error=>{

        });

      
    }
  }
  
module.exports = new CoursesController();