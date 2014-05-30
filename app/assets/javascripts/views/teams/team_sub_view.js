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

})