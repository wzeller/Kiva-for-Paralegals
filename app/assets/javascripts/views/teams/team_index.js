KivaClone.Views.TeamsIndex = Backbone.CompositeView.extend({
  
  initialize: function(){

    this.listenTo(this.collection, "sync add remove", this.render);
    this.listenTo(this.collection, "add", this.addTeam);
    var that = this;
    this.teamViews = this.collection.each(function(team){
      that.addTeam(team);
    })
  },
  
  template: JST['teams/index'],

  addTeam: function(team){
    var teamView = new KivaClone.Views.TeamSubview({model: team});
    this.addSubview("#teamInfo", teamView);
  },

  render: function(){
    var renderedContent = this.template({teams: this.collection});
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

});

