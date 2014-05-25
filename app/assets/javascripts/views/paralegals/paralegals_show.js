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

    //get current user from window; find out how much money has; if enough, post update to current
    //user using val; post new sponsorship; post update to paralegal's money; update thermometer and percentage; 
    //possibly rerender to add sponsor to bottom of page; handle success and error with messages
  },

  render: function(){
    var renderedContent = this.template({paralegal: this.model, sponsors: this.collection});

    this.$el.html(renderedContent);
    return this;
  },

});