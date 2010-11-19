(function($) {

  $$.ParticipantListView = Backbone.View.extend({
    el: $("#users"),

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      $$.Participants.bind('add',     this.addOne);
      $$.Participants.bind('refresh', this.addAll);
      $$.Participants.bind('all',     this.render);
    },

    render: function() {
      return true;
    },

    addOne: function(user) {
      var view = new $$.ParticipantView({
        model: user
      });
      $("#users").append(view.render().el);
    },

    addAll: function() {
      $$.Participants.each(this.addOne);
    }
  });

})(window.jQuery);
