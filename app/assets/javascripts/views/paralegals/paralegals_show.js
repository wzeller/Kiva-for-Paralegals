KivaClone.Views.ParalegalsShow = Backbone.View.extend({
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.collection, "sync", this.render);
  },
  
  template: JST['paralegals/show'],

  render: function(){
    var renderedContent = this.template({paralegal: this.model, sponsors: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

});