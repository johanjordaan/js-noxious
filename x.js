exports.Author = {
  name : { type:'Text' },
  surname : { type:'Text' } 
};

exports.Book = {
  name : { type:'Text' },
  author : { type: 'Author' },
  pub_date : { type: 'Date' } 
};
