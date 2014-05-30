KivaClone.Collections.Teams = Backbone.Collection.extend({

  url: "/api/teams",

  model: KivaClone.Models.Team,

});

KivaClone.Collections.teams = new KivaClone.Collections.Teams()