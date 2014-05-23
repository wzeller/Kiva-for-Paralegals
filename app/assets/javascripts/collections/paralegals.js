KivaClone.Collections.Paralegals = Backbone.Collection.extend({

  model: KivaClone.Models.Paralegal,
  
  url: "/api/paralegals",

});

KivaClone.Collections.paralegals = new KivaClone.Collections.Paralegals();
