KivaClone.Views.TeamShow = Backbone.View.extend({
  
  initialize: function(){
    this.listenTo(this.model, "sync change", this.render);
  },
  
  template: JST['teams/show'],

  render: function(){
    var renderedContent = this.template({user: this.model, teams: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

});
