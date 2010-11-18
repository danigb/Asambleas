(function() {
  $$.OperationView = Backbone.View.extend({
    tagName:  "li",
    initialize: function() {
      _.bindAll(this, 'render', 'close');
      this.model.bind('change', this.render);
      this.model.view = this;
    },
    render: function() {
      this.el = ich.operation_template(this.model.toJSON());
      return this;
    }
  });

})(jQuery);