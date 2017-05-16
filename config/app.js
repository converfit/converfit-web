var appconfig = {
    port: process.env.PORT || 8080,
    version: "2.12.23.1",
    debug: "on",
    enviroment: process.env.NODE_ENV,
    appPath: "http://localhost:3000/",
    pug : {
      pretty : true
    }
};

if(appconfig.enviroment == "local"){
  appconfig.appPath = "http://localhost:3000/";
  appconfig.debug = "on";
}else if(appconfig.enviroment == "develop"){
  appconfig.appPath = "http://dev.conver.fit/";
  appconfig.debug = "off";
}else if(appconfig.enviroment == "beta"){
  appconfig.appPath = "http://beta.conver.fit/";
  appconfig.debug = "off";
}else if(appconfig.enviroment == "production"){
  appconfig.appPath = "https://conver.fit/";
  appconfig.debug = "off";
}
module.exports = appconfig;
