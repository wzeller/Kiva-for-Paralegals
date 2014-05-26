KivaClone.Models.User = Backbone.Model.extend({

  urlRoot: "/api/users",
  
  parse: function(response){
    if (response.paralegals){
      this.paralegals().set(response.paralegals);
      delete response.paralegals;
    }
    return response; 
  },

  paralegals: function(){
    if (!this._paralegals) {
      this._paralegals = new KivaClone.Collections.Paralegals()
    }
    return this._paralegals;
  },

});
