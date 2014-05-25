window.KivaClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    KivaClone.Collections.paralegals = new KivaClone.Collections.Paralegals();
    KivaClone.Collections.users = new KivaClone.Collections.Users();
    KivaClone.Collections.users.fetch({
      success: function(){
        KivaClone.currentUser = KivaClone.Collections.users.get(window.currentUser.id);
      }
    });
    KivaClone.Collections.paralegals.fetch({
      success: function(){
        new KivaClone.Routers.AppRouter({
          paralegals: KivaClone.paralegals
        });
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  KivaClone.initialize();
});
