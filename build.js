var Metalsmith  = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var nav = require("./nav.json");
var hours = require("./hours.json");
var datas = require("./foodmenu.json");
var q;
var y;
var item=[];

Metalsmith(__dirname)         // __dirname defined by node.js:
                              // name of current working directory
  .metadata({                 // add any variable you want
                              // use them in layout, other plugins
    links: nav,
    hour: hours,
    data: datas,
  })
  .source('./src')            // source directory
  .destination('./build')     // destination directory
  .clean(true)                // clean destination before
  .ignore("*.dat1")   
  .use(markdown())    
  .use(layouts({
    default: "base.njk"
  }))   					 // Use to ignore files and directories
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });




