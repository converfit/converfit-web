
/**
 * Routes dependencies.
 * @private
 */

var appconfig = require('../config/app.js');
var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var fs = require('fs');


/**
 * Routes
 * 
 * /
 * /cases/
 * /cases/:post
 * /academy
 * /academy/:post
 * /:page
 * 
 */


/**
 * Route
 * 
 * Home Page
 * /
 * 
 */

router.get('/', function(req, res, next) {
  var data = appconfig.pug;
  data.lang = jsonfile.readFileSync("lang/"+req.lang+".json");
  data.appPath = appconfig.appPath;
  data.page = "home";
  res.render('index', data);
});


/**
 * Route
 *
 * Cases Page
 * /cases/
 * 
 */

router.get('/cases/', function(req, res, next) {
  var data = appconfig.pug;
  data.lang = jsonfile.readFileSync("lang/"+req.lang+".json");
  data.appPath = appconfig.appPath;
  data.page = "cases";
  data.posts_list = [];
  data.posts_list=jsonfile.readFileSync("public/cases/"+req.lang+"/list.json");
  data.posts = {};
  for(var i in data.posts_list){
    var post = data.posts_list[i];
    if (fs.existsSync("public/cases/"+req.lang+"/posts/"+post+".json")) {
      data.posts[post]=jsonfile.readFileSync("public/cases/"+req.lang+"/posts/"+post+".json");
    }
  }
  res.render('cases/index.pug', data);
});


/**
 * Route
 * 
 * Cases Post Page
 * /cases/:post
 * 
 * @param {string} [post] slug post.
 */

router.get('/cases/:post', function(req, res, next) {

  var data = appconfig.pug;
  data.lang = jsonfile.readFileSync("lang/"+req.lang+".json");
  data.appPath = appconfig.appPath;
  data.page = "cases";
  data.post = {};
  var post = req.params.post;
  if (fs.existsSync("public/cases/"+req.lang+"/posts/"+post+".json")) {
    data.post=jsonfile.readFileSync("public/cases/"+req.lang+"/posts/"+post+".json");
  }
  data.post.academy = {};
  for(var i in data.post.academy_posts){
    var academy_post = data.post.academy_posts[i];
    if (fs.existsSync("public/academy/"+req.lang+"/posts/"+academy_post+".json")) {
      data.post.academy[academy_post]=jsonfile.readFileSync("public/academy/"+req.lang+"/posts/"+academy_post+".json");
    }

  }
  res.render('cases/post.pug', data);
});


/**
 * Route
 * 
 * Academy Page
 * /cases/:post
 * 
 */

router.get('/academy', function(req, res, next) {

  var data = appconfig.pug;
  data.lang = jsonfile.readFileSync("lang/"+req.lang+".json");
  data.appPath = appconfig.appPath;
  data.page = "academy";
  data.posts_list = [];
  data.posts_list=jsonfile.readFileSync("public/academy/"+req.lang+"/list.json");
  data.posts = {};
  for(var i in data.posts_list){
    var post = data.posts_list[i];
    if (fs.existsSync("public/academy/"+req.lang+"/posts/"+post+".json")) {
      data.posts[post]=jsonfile.readFileSync("public/academy/"+req.lang+"/posts/"+post+".json");
    }
  }
  res.render('academy/index.pug', data);
});


/**
 * Route
 * 
 * Academy Post Page
 * /academy/:post
 * 
 * @param {string} [post] slug post.
 */

router.get('/academy/:post', function(req, res, next) {

  var data = appconfig.pug;
  data.lang = jsonfile.readFileSync("lang/"+req.lang+".json");
  data.appPath = appconfig.appPath;
  data.page = "academy";
  data.post = {};
  var post = req.params.post;
  if (fs.existsSync("public/academy/"+req.lang+"/posts/"+post+".json")) {
    data.post=jsonfile.readFileSync("public/academy/"+req.lang+"/posts/"+post+".json");
  }
  data.post.academy = {};
  for(var i in data.post.academy_posts){
    var academy_post = data.post.academy_posts[i];
    if (fs.existsSync("public/academy/"+req.lang+"/posts/"+academy_post+".json")) {
      data.post.academy[academy_post]=jsonfile.readFileSync("public/academy/"+req.lang+"/posts/"+academy_post+".json");
    }
  }
  res.render('academy/post.pug', data);
});


/**
 * Route
 * 
 * Page
 * /:page
 * 
 * @param {string} [page] slug page.
 */

router.get('/:page', function(req, res, next) {
  if (fs.existsSync('views/pages/'+req.params.page+'.pug')) {
    var data = appconfig.pug;
    data.lang = jsonfile.readFileSync("lang/"+req.lang+".json");
    data.appPath = appconfig.appPath;
    data.page = "home";
    res.render('pages/'+req.params.page, data);
  }else{
    var data = appconfig.pug;
    data.lang = jsonfile.readFileSync("lang/"+req.lang+".json");
    data.appPath = appconfig.appPath;
    res.render('error/404', data);
  }
});

module.exports = router;
