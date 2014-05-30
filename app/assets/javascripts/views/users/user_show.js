KivaClone.Views.UserShow = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.collection, "sync", this.render);
  },
  
  events: {
    "click #add-money": "addMoney",
  },

  addMoney: function(event){
    event.preventDefault();
    var that = this;
    var user = KivaClone.currentUser;
    var userMoney = user.get("money");

    user.save({money: userMoney + 1000, sponsorship: ""}, {
      success: function(){
        that.model.fetch({ 
          success: function(){
            alert("You have $1000 more dollars.  Wow -- that was easy!")
          }
        });   
      },
      errors: function(){
        alert("Something went wrong -- try again!");
      }
    })

  },

  template: JST['users/show'],

  render: function(){
    var renderedContent = this.template({user: this.model, paralegals: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

});
