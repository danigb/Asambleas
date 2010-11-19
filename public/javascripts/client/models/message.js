(function($) {
  $$.Message = Backbone.Model.extend({
    DONE: "done",
    PENDING: "pending",
    initialize: function() {
      if (!this.get('participant_id')) {
        var participant = $$.Session.current_participant;
        this.set({
          participant_id : participant.get('id'),
          participant_name : participant.get('name'),
          participant_color : participant.get('color')
        });
      } else {
        participant = $$.Participants.getByParticipantId(this.get('participant_id'))
        this.set({
          participant_name : participant.get('name'),
          participant_color : participant.get('color')
        });
      }
      
      if (!this.get('type')) {
        this.set({
          type : 'message'
        })
      }
    },
    clear: function() {
      this.destroy();
      this.view.remove();
    }
  });
})(jQuery);