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
    var model = collection.first()
    var indexView = new KivaClone.Views.ParalegalSubview({collection: collection, model: model});
    $('#content').html(indexView.render().$el);
  },

  show: function(id){
    var paralegal = KivaClone.Collections.paralegals.getOrFetch(id);
    paralegal.fetch();
    var showView = new KivaClone.Views.ParalegalsShow({model: paralegal, collection: paralegal.sponsors()});
    $('#content').html(showView.render().$el);
  },

});
