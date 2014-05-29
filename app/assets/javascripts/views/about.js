KivaClone.Views.About = Backbone.View.extend({
  
  template: JST['about'],

  render: function(){
    var renderedContent = this.template;
    this.$el.html(renderedContent);
    return this;
  },

})