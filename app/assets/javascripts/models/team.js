KivaClone.Models.Team = Backbone.Model.extend({

  urlRoot: "/api/teams",
  
  parse: function(response){
    if (response.members){
      this.members().set(response.members);
      delete response.members;
    }
    return response; 
  },

  members: function(){
    if (!this._members) {
      this._members = new KivaClone.Collections.Users()
    }
    return this._members;
  },

});
