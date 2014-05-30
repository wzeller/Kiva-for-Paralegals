KivaClone.Views.ParalegalsIndex = Backbone.CompositeView.extend({
  
  initialize: function(){
    this.render();
    this.listenTo(this.collection, "sync add remove", this.render);
    var that = this;
    this.paralegalViews = this.collection.each(function(paralegal){
      that.addParalegal(paralegal);
    })
  },

  addParalegal: function(paralegal){
    var paralegalView = new KivaClone.Views.ParalegalSubview({model: paralegal});
    this.addSubview("#paralegalInfo", paralegalView);
  },
  
  template: JST['paralegals/index'],

  render: function(){
    var renderedContent = this.template({paralegals: this.collection});
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

});
