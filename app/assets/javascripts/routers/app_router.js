KivaClone.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "home",
  },

  home: function(){
    KivaClone.Collections.paralegals.fetch()
    var collection = KivaClone.Collections.paralegals;
    var homeView = new KivaClone.Views.ParalegalsHome({collection: collection});
    $('#content').html(homeView.render().$el);
  },

});
