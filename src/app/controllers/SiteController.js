const Course = require('../models/Course');
const { mutipleMongooseToObject} = require('../../util/mongoose');


class SiteController {
  async index(req, res, next) {
    // [GET]
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses)
        });
      })
      
      .catch(error => next(error));
  };


  

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
