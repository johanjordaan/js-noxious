fs = require('fs');
path = require('path');
ejs = require('ejs');
__ = require('underscore');

settings = require('./settings').settings;
models = require(process.argv[2]);

mkdir = function(path) {
  try {
    fs.mkdirSync(path); 
  } catch(err) {
    if(err.code != 'EEXIST')
      throw err;
  }
}

copy = function(source,target) {
  fs.writeFileSync(target,fs.readFileSync(source,'utf8'));
}

render = function(template,params,destination) {
  t = fs.readFileSync(template,'utf8') ;
  tr = ejs.render(t,params);
  fs.writeFileSync(destination,tr);
}


mkdir(settings.destination); 
mkdir(settings.destination +'/js');

for(var file_key in settings.files) {
  dest = path.join(settings.destination,file_key);
  mkdir(dest);
  for(var i in settings.files[file_key]) {
    copy(settings.files[file_key][i],path.join(dest,path.basename(settings.files[file_key][i])));
  }  
}

for(var i in settings.app_templates) {
  settings.app_templates[i].text = fs.readFileSync(settings.app_templates[i].file,'utf8');
}

for(var i in settings.templates) {
  render(settings.templates[i].template,{settings:settings,models:models},path.join(settings.destination,settings.templates[i].destination));
}

//for(var i in d) {
//  d[i].name = i;
//  render('model.ejs',d[i],path.join(settings.destination,'/js/models/',i+'.js'));
//  render('collection.ejs',d[i],path.join(settings.destination,'/js/collections/',i+'Collection.js'));
//  render('listview.ejs',d[i],path.join(settings.destination,'/js/views/',i+'ListView.js'));
//  render('view.ejs',d[i],path.join(settings.destination,'/js/views/',i+'View.js'));
//}
