exports.settings = {
  title : 'noxapp',
  destination : 'nox_output',
  files : {
    'js' : [ 'lib/jquery-1.7.1.min.js','lib/underscore-min.js','lib/backbone-min.js','lib/backbone.modelbinding.min.js','lib/ejs.min.js','noxious_types.js' ],
  },
  libs : [
    { alias : 'jquery', file : 'jquery-1.7.1.min'},
    { alias : 'underscore', file : 'underscore-min'},
    { alias : 'backbone', file : 'backbone-min'},
    { alias : 'modelbinding', file : 'backbone.modelbinding.min'},
    { alias : 'ejs', file : 'ejs.min'},
    { alias : 'noxt', file : 'noxious_types'},
  ],
  templates : [
    {template:'index.ejs',destination:'index.html'},
    {template:'noxapp.ejs',destination:'js/noxapp.js'},
  ],
  app_templates : [
    {name:"form_view_template",file:"form_view.ejs"},
    {name:"list_view_template",file:"list_view.ejs"},
  ]
}
