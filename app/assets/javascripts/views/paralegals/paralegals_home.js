KivaClone.Views.ParalegalsHome = Backbone.View.extend({
  
  initialize: function(){
    this.listenTo(this.collection, "sync add remove", this.render);
    this.fired = false;
  },

  events: {
    "mouseenter a": "displayModal",
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
      var homeBottom = $("#home-photos").height()+$("#home-photos").offset().top
      var right = $(window).width()
      // console.log(x);
      // console.log(y);

      if (y-100 < homeTop){y = homeTop} else {y = y-50}
      if (y+170 > homeBottom){y = homeBottom-180}
      if (x-100 < 0){x=0} else {x = x-100}
      if (x+500 > right){x = right-540}

      $("#home-modal").css('position', 'absolute');
      $("#home-modal").css('top', y); 
      $("#home-modal").css('left', x);
      this.fired = true;
    }

    // if (this.fired == true && event.currentTarget){
    //   $('#home-modal').remove();
    //   this.fired = false;
    // }
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
