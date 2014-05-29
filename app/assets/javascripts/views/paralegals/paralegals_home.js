KivaClone.Views.ParalegalsHome = Backbone.View.extend({
  
  initialize: function(){
    this.listenTo(this.collection, "sync add remove", this.render);
    this.fired = false;
  },

  events: {
    "mouseover a": "displayModal",
    "mouseleave #home-modal": "removeModal"
  }, 

  template: JST['paralegals/home'],

  modalContent: JST['paralegals/modal'],

  displayModal: function(event){
    if (this.fired == false){
      var paralegalURL = event.currentTarget.getAttribute("href");
      var paralegalId = paralegalURL.replace( /^\D+/g, '');
      var paralegal = KivaClone.Collections.paralegals.getOrFetch(paralegalId);
      var modalContent = this.modalContent({paralegal: paralegal});
      this.$el.append(modalContent);
      var x = event.clientX 
      var y = event.clientY 
      var homeTop = $("#home-photos").offset().top
      
      // console.log(x);
      // console.log(y);
      // // debugger
      if (y-50 < homeTop){y = homeTop} else {y = y-50}
      $("#home-modal").css('position', 'absolute');
      $("#home-modal").css('top', y); 
      $("#home-modal").css('left', x-50);
      this.fired = true;
    }
  },

  removeModal: function(){
    $('#home-modal').remove();
    this.fired = false;
  },

  render: function(){
    var renderedContent = this.template({paralegals: this.collection});
    this.$el.html(renderedContent);
    return this;
  }

});
