KivaClone.Collections.Paralegals = Backbone.Collection.extend({

  model: KivaClone.Models.Paralegal,
  
  url: "/api/paralegals",

  getOrFetch: function(id){
    var model;
    var paralegals = this;
    if (model = paralegals.get(id)){
      return model
    } else {
      model = new KivaClone.Paralegals.Model({id: id});
      model.fetch({
        success: function(){
          paralegals.add(model)
        }
      })
      return model;
    }
  },

});

KivaClone.Collections.paralegals = new KivaClone.Collections.Paralegals();
