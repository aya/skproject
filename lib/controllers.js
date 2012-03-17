module.exports = Server.controllers = {
  controller_objects : {}
};

Server.controllers.autoload = function(db){
    console.log("===> controllers.js : autoload");
  var fs = require("fs"),
      path = require("path"),
      sys = require("util"),
      files = fs.readdirSync( Server.paths.controllers ),
      util = require("./util"),
      names = _.map(files,function(f){
        return( path.basename(f) );
      });
    

  _.each(names,function(controller){
    var c_id = util.camelize( controller.replace(/.js$/,'') );
    Server.controllers.controller_objects[c_id] = 
      require( Server.paths.controllers + "/" + controller );
  });
};
