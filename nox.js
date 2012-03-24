fs = require('fs');
path = require('path');
ejs = require('ejs');
__ = require('underscore');

noxt = require('./noxious_types');

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

String.prototype.startsWith = function (str){
  return this.indexOf(str) == 0;
};

render = function(template,params,destination) {
  t = fs.readFileSync(template,'utf8') ;
  tr = ejs.render(t,params);
  fs.writeFileSync(destination,tr);
}

mkdir(settings.destination); 
mkdir(settings.destination +'/js');

// Create the file structure for the application and copy the 
// files mentioned in the settings.files property
//
for(var file_key in settings.files) {
  dest = path.join(settings.destination,file_key);
  mkdir(dest);
  for(var i in settings.files[file_key]) {
    copy(settings.files[file_key][i],path.join(dest,path.basename(settings.files[file_key][i])));
  }  
}

// Each application template which is mentioned is read and stored in the text propery of the
// settings.app_template item. This is used later to redner the <script/> sections.
//
for(var i in settings.app_templates) {
  settings.app_templates[i].text = fs.readFileSync(settings.app_templates[i].file,'utf8');
}


for(var model_key in models) {
  var model = models[model_key];
  // Define __meta if its is not defined
  //
  if(!model.__meta)
    model.__meta = {}
  // If the ignore fields has not been defined then define it and att __meta
  // If it has been defined then __meta would most probably not be in it so add
  // it since we never want meta is the list
  //
  if(!model.__meta.ignore_fields)
    model.__meta.ignore_fields = ['__meta']
  if(model.__meta.ignore_fields.indexOf('__meta')==-1)
    model.__meta.ignore_fields.push('__meta');
  // If the __meta fields doe not exists then create it by using the fields in the 
  // definition and exclusing the ignore ones
  //
  if(!model.__meta.fields) {
    model.__meta.fields = []
    for(var field in model){
      if(model.__meta.ignore_fields.indexOf(field)==-1)
        model.__meta.fields.push(field);
    }
  }
  // Create listfields if it does not exist and default it to the fields list
  //
  if(!model.__meta.list_fields)
    model.__meta.list_fields = model.__meta.fields;
  
  for(var field_key in model){
    model[field_key].field_name = field_key;
  }
 
  console.log(model);  
}

for(var i in settings.templates) {
  render(settings.templates[i].template,{settings:settings,models:models},path.join(settings.destination,settings.templates[i].destination));
}

