var appconfig = require('../config/app.js');
var express = require('express');
var router = express.Router();

var jsonfile = require('jsonfile')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = appconfig.pug;
  var lang = require('../lang/es_ES.js');
  data.lang = lang;
  data.appPath = appconfig.appPath;
  data.page = "home";
  res.render('index', data);
});

router.get('/cases/', function(req, res, next) {
  var data = appconfig.pug;
  var lang = require('../lang/es_ES.js');
  var fs = require('fs');
  data.lang = lang;
  data.appPath = appconfig.appPath;
  data.page = "cases";
  data.posts_list = [];
  data.posts_list=jsonfile.readFileSync("public/cases/es_ES/list.json");
  data.posts = {};
  for(var i in data.posts_list){
    var post = data.posts_list[i];
    if (fs.existsSync("public/cases/es_ES/posts/"+post+".json")) {
      console.log(post);
      data.posts[post]=jsonfile.readFileSync("public/cases/es_ES/posts/"+post+".json");
      console.log(data.posts[post]);
    }
  }
  res.render('cases/index.pug', data);
});

router.get('/cases/:post', function(req, res, next) {

  var data = appconfig.pug;
  var lang = require('../lang/es_ES.js');
  var fs = require('fs');
  data.lang = lang;
  data.appPath = appconfig.appPath;
  data.page = "cases";
  data.post = {};
  var post = req.params.post;
  if (fs.existsSync("public/cases/es_ES/posts/"+post+".json")) {
    data.post=jsonfile.readFileSync("public/cases/es_ES/posts/"+post+".json");
  }
  console.log(data.post.academy_posts);
  data.post.academy = {};
  for(var i in data.post.academy_posts){
    var academy_post = data.post.academy_posts[i];
    console.log("public/academy/es_ES/posts/"+academy_post+".json");
    if (fs.existsSync("public/academy/es_ES/posts/"+academy_post+".json")) {
      console.log(academy_post);
      data.post.academy[academy_post]=jsonfile.readFileSync("public/academy/es_ES/posts/"+academy_post+".json");
      console.log(data.post.academy[academy_post]);
    }

  }
  res.render('cases/post.pug', data);
});

router.get('/academy', function(req, res, next) {

  var data = appconfig.pug;
  var lang = require('../lang/es_ES.js');
  var fs = require('fs');
  data.lang = lang;
  data.appPath = appconfig.appPath;
  data.page = "academy";
  data.posts_list = [];
  data.posts_list=jsonfile.readFileSync("public/academy/es_ES/list.json");
  data.posts = {};
  for(var i in data.posts_list){
    var post = data.posts_list[i];
    if (fs.existsSync("public/academy/es_ES/posts/"+post+".json")) {
      data.posts[post]=jsonfile.readFileSync("public/academy/es_ES/posts/"+post+".json");
    }
  }
  res.render('academy/index.pug', data);
});


router.get('/academy/:post', function(req, res, next) {

  var data = appconfig.pug;
  var lang = require('../lang/es_ES.js');
  var fs = require('fs');
  data.lang = lang;
  data.appPath = appconfig.appPath;
  data.page = "academy";
  data.post = {};
  var post = req.params.post;
  if (fs.existsSync("public/academy/es_ES/posts/"+post+".json")) {
    data.post=jsonfile.readFileSync("public/academy/es_ES/posts/"+post+".json");
  }
  console.log(data.post.academy_posts);
  data.post.academy = {};
  for(var i in data.post.academy_posts){
    var academy_post = data.post.academy_posts[i];
    console.log("public/academy/es_ES/posts/"+academy_post+".json");
    if (fs.existsSync("public/academy/es_ES/posts/"+academy_post+".json")) {
      console.log(academy_post);
      data.post.academy[academy_post]=jsonfile.readFileSync("public/academy/es_ES/posts/"+academy_post+".json");
      console.log(data.post.academy[academy_post]);
    }
  }
  res.render('academy/post.pug', data);
});

router.get('/:page', function(req, res, next) {
  var fs = require('fs');
  if (fs.existsSync('views/pages/'+req.params.page+'.pug')) {
    var data = appconfig.pug;
    var lang = require('../lang/es_ES.js');
    data.lang = lang;
    data.appPath = appconfig.appPath;
    data.page = "home";
    res.render('pages/'+req.params.page, data);
  }else{
    var data = appconfig.pug;
    var lang = require('../lang/es_ES.js');
    data.lang = lang;
    data.appPath = appconfig.appPath;
    res.render('error/404', data);
  }
});

module.exports = router;
