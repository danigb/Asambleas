(function($) {
  $$.TheModelView = Backbone.View.extend({
    tagName:  "div",
    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.model.view = this;
    },
    render: function() {
      this.el = ich.theModel_template(this.model.toJSON());
      return this;
    }
  });

})(jQuery);