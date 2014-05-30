KivaClone.Views.TeamSubview = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click #join-button": "joinTeam",
  },

  template: JST["teams/subview"],

  render: function(){
    var renderedContent = this.template({
      team: this.model,
    });
    this.$el.html(renderedContent);
    return this;
  },

  joinTeam: function(event){
    var that = this;
    var user = KivaClone.currentUser;
    var team = this.model;

      team.save({user: user}, {
        success: function(){
    
          KivaClone.currentUser.fetch({
            success: function(){
              var target = ".join." + that.model.get("id")
              $(target).append('<div class="alert alert-success">Thank you for joining!</div>')
              $('.alert').fadeOut(4000, function(){});
              //remove button for teams you belong to
            }
          });
         
        },
        error: function(model, response){
          alert("Something went wrong -- please try again.")
        }
      })

    } 


})