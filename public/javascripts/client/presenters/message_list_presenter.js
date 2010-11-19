
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

    render: function() {
    },

    addOne: function(message) {
      var view = new $$.MessageView({
        model: message
      });
      $("#messages .output").append(view.render().el);
    },

    addAll: function() {
      $$.Messages.each(this.addOne);
    },

    createOnEnter: function(e) {
      if (e.keyCode == 13) {
        $$.Messages.create(new $$.Message({
          body: this.input.val()
        }));
        this.input.val('');
        return false;
      }
      return true;
    }
  });
})(jQuery);