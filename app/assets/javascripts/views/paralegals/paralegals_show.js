KivaClone.Views.ParalegalsShow = Backbone.View.extend({
  
  initialize: function(){
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.collection, "sync", this.render);
  },
  
  template: JST['paralegals/show'],

  events: {
    "click a": "handleLoanSelect",
    "click input": "handleDonate",
    "mouseover #button-area": "displayMoney"
  },

  displayMoney: function(event){
    if (this.fired === false){
      $('.modal').modal("show")
      this.fired = true; 
    } 
  },

  handleLoanSelect: function(event){
    event.preventDefault();
    var newContent = $(event.currentTarget).text() 
    $("#pulldown-button").text(newContent).append('<span class="caret"></span>')
    $("#donate-button").val("Donate " + $(event.currentTarget).text())
  },

  handleDonate: function(event){
    var that = this;
    var donation = parseInt($(event.currentTarget).val().slice(8), 10);
    var goal = 1000;
    var user = KivaClone.currentUser;
    var previousMoney = parseInt(this.model.get("money"), 10);
    if ((previousMoney + donation) > goal){ 
      donation = goal - previousMoney;
      alert("You donated more than the goal.  Your actual donation is " + donation)
    } 
    var paralegalMoney = previousMoney + donation;
    var userMoney = user.get("money");
    var remainingMoney = userMoney - donation; 
    if (userMoney >= donation){
      user.save({money: remainingMoney, sponsorship: this.model.id, donation: donation, amount: paralegalMoney}, {
        success: function(){
          that.model.fetch({ 
            success: function(){
              KivaClone.currentUser.fetch({
                success: function(){
                  that.fired = false;
                  $("#button-area").append('<div class="alert alert-success">Thank you for your generosity!</div>')
                  $('.alert').fadeOut(4000, function(){});
                }
              });
            }
          });
         
        },
        errors: function(){
          alert("Something went wrong -- try again!");
        }
      })

    } else {
      alert("You have insufficient funds.")
    }
  },

  render: function(){
    var renderedContent = this.template({paralegal: this.model, sponsors: this.collection});
    this.$el.html(renderedContent);
    this.fired = true;
    return this;
  },

});