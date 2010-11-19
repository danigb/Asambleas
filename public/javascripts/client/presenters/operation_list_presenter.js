(function() {
  $$.OperationListView = Backbone.View.extend({
    el: $("#operations"),

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');

      $$.Operations.bind('add',     this.addOne);
      $$.Operations.bind('refresh', this.addAll);
      $$.Operations.bind('all',     this.render);
    },

    render: function() {
    },

    addOne: function(operation) {
      var view = new $$.OperationView({
        model: operation
      });
      $("#operations .output").append(view.render().el);
    },

    addAll: function() {
      Operations.each(this.addOne);
    },

    newAttributes: function() {
      return {
        operation: this.input.val()
      };
    },
    createOnEnter: function(e) {
      if (e.keyCode == 13) {
        Operations.add(this.newAttributes());
        this.input.val('');
        return false;
      }
      return true;
    }
  });
})(jQuery);
