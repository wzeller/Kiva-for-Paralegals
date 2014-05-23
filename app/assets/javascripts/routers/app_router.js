KivaClone.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "home",
    "paralegals/index": "index",
    "paralegals/:id": "show",
  
  },

  home: function(){
    KivaClone.Collections.paralegals.fetch()
    var collection = KivaClone.Collections.paralegals;
    var homeView = new KivaClone.Views.ParalegalsHome({collection: collection});
    $('#content').html(homeView.render().$el);
  },

  index: function(){
    KivaClone.Collections.paralegals.fetch()
    var collection = KivaClone.Collections.paralegals;
    var indexView = new KivaClone.Views.ParalegalsIndex({collection: collection});
    $('#content').html(indexView.render().$el);
  },

  show: function(id){
    var paralegal = KivaClone.Collections.paralegals.getOrFetch(id);
    var showView = new KivaClone.Views.ParalegalsShow({model: paralegal});
    $('#content').html(showView.render().$el);
  },

});
