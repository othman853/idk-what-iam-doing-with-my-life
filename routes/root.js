module.exports = (app) => {

  app.get('/', (request, response) => {
    response.render('home');
    response.end();
  });

}
