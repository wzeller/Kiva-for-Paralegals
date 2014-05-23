KivaClone.Views.ParalegalsHome = Backbone.View.extend({
  
  initialize: function(){
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  events: {
    // "mouseover .col-md-1": "handlePhotoClick"
  }, 
  
  handlePhotoClick: function(event){
    alert("mouseover")
    console.log(event.currentTarget)
  },

  template: JST['paralegals/home'],

  paralegalSubview: function(collection){

  },

  render: function(){
    var renderedContent = this.template({paralegals: this.collection});
    this.$el.html(renderedContent);
    return this;
  }

});
