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
        if (window.currentUser){
        KivaClone.currentUser = KivaClone.Collections.users.get(window.currentUser.id);
        }
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

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, subview) {
    this.subviews(selector).push(subview);
    // Try to attach the subview. Render it as a convenience.
    this.attachSubview(selector, subview.render());
  },

  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);
    // Bind events in case `subview` has previously been removed from
    // DOM.
    subview.delegateEvents();
  },

  attachSubviews: function () {
    var view = this;
    _(this.subviews()).each(function (subviews, selector) {
      view.$(selector).empty();
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) { subview.remove(); });
    });
  },

  removeSubview: function (selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },

  subviews: function (selector) {
    // Map of selectors to subviews that live inside that selector.
    // Optionally pass a selector and I'll initialize/return an array
    // of subviews for the sel.
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  }
});