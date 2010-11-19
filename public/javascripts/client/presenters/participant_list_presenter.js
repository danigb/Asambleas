(function($) {

  $$.ParticipantListView = Backbone.View.extend({
    el: $("#participants"),

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      $$.Participants.bind('add',     this.addOne);
      $$.Participants.bind('refresh', this.addAll);
      $$.Participants.bind('all',     this.render);
    },

    render: function() {
      return true;
    },

    addOne: function(participant) {
      var view = new $$.ParticipantView({
        model: participant
      });
      $("#participants").append(view.render().el);
    },

    addAll: function() {
      $$.Participants.each(this.addOne);
    }
  });

})(window.jQuery);
