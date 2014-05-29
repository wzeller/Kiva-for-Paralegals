KivaClone.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "home",
    "paralegals/index": "index",
    "paralegals/:id": "showParalegal",
    "user": "showUser",
    "about": "aboutPage",
  },

  home: function(){
    KivaClone.Collections.paralegals.fetch()
    var collection = KivaClone.Collections.paralegals;
    var homeView = new KivaClone.Views.ParalegalsHome({collection: collection});
    this._swapView(homeView);
  },

  index: function(){
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

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $('#content').html(newView.render().$el);
  },

});
