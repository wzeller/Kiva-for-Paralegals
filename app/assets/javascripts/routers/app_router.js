KivaClone.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "home",
    "paralegals/index": "paralegalIndex",
    "paralegals/:id": "showParalegal",
    "user": "showUser",
    "about": "aboutPage",
    "myTeams": "myTeamsPage", 
    "teams/index": "teamsIndex"
  },

  home: function(){
    KivaClone.Collections.paralegals.fetch()
    var collection = KivaClone.Collections.paralegals;
    var homeView = new KivaClone.Views.ParalegalsHome({collection: collection});
    this._swapView(homeView);
  },

  paralegalIndex: function(){
    KivaClone.Collections.paralegals.fetch()
    var collection = KivaClone.Collections.paralegals;
    var indexView = new KivaClone.Views.ParalegalsIndex({collection: collection});
    this._swapView(indexView);
  },

  showParalegal: function(id){
    var paralegal = KivaClone.Collections.paralegals.getOrFetch(id);
    paralegal.fetch();
    var showView = new KivaClone.Views.ParalegalsShow({model: paralegal, collection: paralegal.sponsors()});
    this._swapView(showView);
  },

  showUser: function(){
    var user = KivaClone.currentUser;
    user.fetch();
    var userView = new KivaClone.Views.UserShow({model: user, collection: user.paralegals()});
    this._swapView(userView);
  },

  aboutPage: function(){
    var aboutView = new KivaClone.Views.About();
    this._swapView(aboutView);
  },

  myTeamsPage: function(){
    var user = KivaClone.currentUser;
    user.fetch();
    var myTeamsView = new KivaClone.Views.TeamShow({model: user, collection: user.teams()});
    this._swapView(myTeamsView);
  },

  teamsIndex: function(){
    KivaClone.Collections.teams.fetch()
    var collection = KivaClone.Collections.teams;
    var teamIndexView = new KivaClone.Views.TeamsIndex({collection: collection});
    this._swapView(teamIndexView);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $('#content').html(newView.render().$el);
  },

});
