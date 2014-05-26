KivaClone.Views.ParalegalSubview = Backbone.View.extend({

  template: JST["paralegals/subview"],

  render: function(){
    var renderedContent = this.template({
      paralegal: this.model,
    });
    this.$el.html(renderedContent);
    return this;
  },

})