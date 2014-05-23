KivaClone.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "home",
  },

  home: function(){
    KivaClone.Collections.paralegals.fetch()
    var collection = KivaClone.Collections.paralegals;
    var indexView = new KivaClone.Views.ParalegalsIndex({collection: collection});
    $('#content').html(indexView.render().$el);
  },

});
