(function() {
  $$.OperationView = Backbone.View.extend({
    tagName:  "li",
    initialize: function() {
      console.log("OperationView", this.model.toJSON());
      _.bindAll(this, 'render', 'close');
      this.model.bind('change', this.render);
      this.model.view = this;
    },
    render: function() {
      var data = this.model.toJSON();
      data.params_str = JSON.stringify(data.params);
      this.el = ich.operation_template(data);
      return this;
    }
  });

})(jQuery);