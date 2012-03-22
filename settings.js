exports.settings = {
  title : 'noxapp',
  destination : 'nox_output',
  files : {
    'js' : [ 'lib/jquery-1.7.1.min.js','lib/underscore-min.js','lib/backbone-min.js','lib/backbone.modelbinding.min.js','lib/ejs.min.js' ],
  },
  libs : [
    { alias : 'jquery', file : 'jquery-1.7.1.min'},
    { alias : 'underscore', file : 'underscore-min'},
    { alias : 'backbone', file : 'backbone-min'},
    { alias : 'modelbinding', file : 'backbone.modelbinding.min'},
    { alias : 'ejs', file : 'ejs.min'},
  ],
  templates : [
    {template:'index.ejs',destination:'index.html'},
    {template:'noxapp.ejs',destination:'js/noxapp.js'},
  ],
  app_templates : [
    {name:"list_view",file:"list_view.ejs"},
  ]
}
