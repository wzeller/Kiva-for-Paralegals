KivaClone.Models.User = Backbone.Model.extend({

  urlRoot: "/api/users",
  
  parse: function(response){
    if (response.paralegals){
      this.paralegals().set(response.paralegals);
      delete response.paralegals;
    }

    if (response.teams){
      this.teams().set(response.teams);
      delete response.teams;
    }
    return response; 
  },

  paralegals: function(){
    if (!this._paralegals) {
      this._paralegals = new KivaClone.Collections.Paralegals()
    }
    return this._paralegals;
  },

  teams: function(){
    if (!this._teams) {
      this._teams = new KivaClone.Collections.Teams()
    }
    return this._teams;
  },

  thumbnail: function(){
    var thumb = this.get("avatar").replace("original", "thumb");
    return thumb
  },

});
