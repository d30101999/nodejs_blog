const newsRouter = require('./news');

const meRouter = require('./me');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
  app.use('/courses', courseRouter);
  app.use('/news', newsRouter);

  app.use('/me', meRouter);

  app.use('/', siteRouter);
}

module.exports = route;
