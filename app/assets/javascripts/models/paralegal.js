KivaClone.Models.Paralegal = Backbone.Model.extend({
  urlRoot: "/api/paralegals",
  
  parse: function(response){
    if (response.sponsors){
      this.sponsors().set(response.sponsors);
      delete response.sponsors;
    }
    return response; 
  },

  sponsors: function(){
    if (!this._sponsors) {
      this._sponsors = new KivaClone.Collections.Users()
    }
    return this._sponsors;
  },

});
