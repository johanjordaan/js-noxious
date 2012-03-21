exports.settings = {
  title : 'noxapp',
  destination : 'nox_output',
  files : {
    'js' : [ 'lib/jquery-1.7.1.min.js','lib/underscore-min.js','lib/backbone-min.js','lib/backbone.modelbinding.min.js' ],
  },
  libs : [
    { alias : 'jquery', file : 'jquery-1.7.1.min',code:'$'},
    { alias : 'underscore', file : 'underscore-min',code:'_'},
    { alias : 'backbone', file : 'backbone-min',code:'Backbone'},
    { alias : 'modelbinding', file : 'backbone.modelbinding.min',code:'modelbinding'},
  ],
  templates : [
    {template:'index.ejs',destination:'index.html'},
    {template:'noxapp.ejs',destination:'js/noxapp.js'},
  ]
}
