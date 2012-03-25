TextField = function(params) {
  this.type = 'TextField';
  this.field_name = '-';
  this.length = 0;
  
  if(params) {
    if(params.length)
      this.length = params.length;
    if(params.field_name)
      this.name = params.field_name;
  }
};

TextField.prototype.js_new_code = function() {
  return 'new '+this.type+'({field_name:\''+this.field_name+'\',length:'+this.length+'})';
}

if(typeof(exports) != 'undefined') {
  exports.TextField = TextField;
}