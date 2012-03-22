exports.Author = {
  __list_display : ['name','surname'],
  name : { type:'Text' },
  surname : { type:'Text' }, 
//  as_string : { type:'Calculated',code:"function() { return this.surname+', '+this.name; }" }
};

exports.Book = {
  __list_display : ['name','author.as_string'],
  name : { type:'Text' },
  author : { type: 'Author' },
  pub_date : { type: 'Date' } 
};
