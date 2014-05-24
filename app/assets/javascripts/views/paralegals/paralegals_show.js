KivaClone.Views.ParalegalsShow = Backbone.View.extend({
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.collection, "sync", this.render);
  },
  
  template: JST['paralegals/show'],

  events: {
    "click a": "handleLoanSelect",
    "click input": "handleDonate",
  },

  handleLoanSelect: function(event){
    var newContent = $(event.currentTarget).text() 
    $("#pulldown-button").text(newContent).append('<span class="caret"></span>')
    $("#donate-button").val($(event.currentTarget).text())
  },

  handleDonate: function(event){
    console.log($(event.currentTarget).val())
  },

  render: function(){
    var renderedContent = this.template({paralegal: this.model, sponsors: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

});