KivaClone.Views.ParalegalSubview = Backbone.View.extend({


  initialize: function(){
    this.listenTo(this.model, "sync change", this.render);
    // this.listenTo(this.collection, "sync", this.render);
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
    var donation = $(event.currentTarget).val().slice(8);
    var user = KivaClone.currentUser;
    var paralegalMoney = parseInt(this.model.get("money"), 10) + parseInt(donation, 10);
    var userMoney = user.get("money");
    var remainingMoney = userMoney - donation; 
    if (userMoney > donation){
      user.save({money: remainingMoney, sponsorship: this.model.id, amount: paralegalMoney}, {
        success: function(){
          that.model.fetch({
            success: function(){
              KivaClone.currentUser.fetch({
                success: function(){
                  $("#fundraising").append('<div class="alert alert-success">Thank you for your generosity!</div>')
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


})