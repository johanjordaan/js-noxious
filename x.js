exports.Author = {
  name : new noxt.TextField({length:50}),
  surname : new noxt.TextField({length:100}),

  __meta : {
    // Assumed fields
    // fields = ['name','surname']
    // ignored_fields = ['__meta']
    // list_fields : ['name','surname'],
  }
}

exports.Book = {
  name : new noxt.TextField({length:50}),
  author : new noxt.TextField({length:50}),
  pub_date : new noxt.TextField({length:100}),
  to_be_ingnored : 'SomeRandomTypeToBeIgnored',

  __meta : {
    list_fields : ['name','pub_date'],
    ignore_fields : ['to_be_ingnored'],
  }
}
