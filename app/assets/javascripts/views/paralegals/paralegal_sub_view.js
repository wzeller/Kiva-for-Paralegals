 KivaClone.Views.ParalegalSubview = Backbone.View.extend({


  initialize: function(){
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click input": "handleDonate",
  },

  template: JST["paralegals/subview"],

  render: function(){
    var renderedContent = this.template({
      paralegal: this.model,
    });
    this.$el.html(renderedContent);
    return this;
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
    if (userMoney > donation){
      user.save({money: remainingMoney, sponsorship: this.model.id, donation: donation, amount: paralegalMoney}, {
        success: function(){
          that.model.fetch({
            success: function(){
              KivaClone.currentUser.fetch({
                success: function(){
                  var target = "#fundraising" + that.model.get("id")
                  $(target).append('<div class="alert alert-success">Thank you for your generosity!</div>')
                  $('.alert').fadeOut(4000, function(){});
                }
              });
            }
          });
        },
        error: function(model, response){
          alert("Something went wrong -- please try again.")
        }
      })

    } else {
      alert("You have insufficient funds.")
    }
  },


})