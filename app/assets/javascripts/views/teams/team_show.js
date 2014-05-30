KivaClone.Views.TeamShow = Backbone.View.extend({

  template: JST['teams/show'],

  render: function(){
    var renderedContent = this.template({user: this.model, teams: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

});
