(function($) {
  $$.AssemblyView = Backbone.View.extend({
    tagName:  "div",
    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.model.view = this;
      this.render();
    },
    render: function() {
      console.log("AssemblyView render");
      $("#info-assembly").html(ich.assembly_status_template(this.model.toJSON()));

      $("#assembly").html(ich.assembly_template(this.model.toJSON()));
      return this;
    }
  });

})(jQuery);