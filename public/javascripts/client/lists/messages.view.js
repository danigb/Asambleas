
(function() {
  $$.MessageListView = Backbone.View.extend({
    el: $("#messages"),
    //  statusTemplate: _.template($('#message-status-template').html()),

    events: {
      "keypress #new-message":  "createOnEnter"
    },

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');

      this.input = $("#new-message");

      $$.Messages.bind('add',     this.addOne);
      $$.Messages.bind('refresh', this.addAll);
      $$.Messages.bind('all',     this.render);
    },

    // Re-rendering just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      $('#messages .status').empty().append(ich.status_template({
        messages:   Messages.length,
        commands:  0
      }));
    },

    addOne: function(message) {
      var view = new $$.MessageView({
        model: message
      });
      $("#messages .output").append(view.render().el);
    },

    addAll: function() {
      Messages.each(this.addOne);
    },

    newAttributes: function() {
      return {
        message: this.input.val()
      };
    },
    createOnEnter: function(e) {
      if (e.keyCode == 13) {
        Messages.add(this.newAttributes());
        this.input.val('');
        return false;
      }
      return true;
    }
  });
})(jQuery);