(function($) {
  $$.Message = Backbone.Model.extend({
    DONE: "done",
    PENDING: "pending",
    initialize: function() {
      var participant = $$.Session.current_participant;
      this.set({
        participant_name : participant.get('name'),
        participant_color : participant.get('color')
        })
    },
    clear: function() {
      this.destroy();
      this.view.remove();
    }
  });
})(jQuery);