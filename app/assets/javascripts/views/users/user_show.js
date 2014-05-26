KivaClone.Views.UserShow = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.collection, "sync", this.render);
  },

  template: JST['users/show'],

  render: function(){
    var renderedContent = this.template({user: this.model, paralegals: this.collection});
    console.log(this.collection);
    this.$el.html(renderedContent);
    return this;
  },

});
