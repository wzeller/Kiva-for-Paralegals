KivaClone.Views.UserShow = Backbone.View.extend({

  template: JST['users/show'],

  render: function(){
    var renderedContent = this.template({user: this.model, paralegals: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

});
