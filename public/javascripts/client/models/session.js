(function() {
  $$.SessionModel = Backbone.Model.extend({
    initialize : function () {
      this.current_participant = null;
      this.current_id = null;
      this.current_name = null;
      this.bind('change:current_participant', this.setCurrentParticipant);
      console.log("Session!");
    },
    setCurrentParticipant : function() {
      var participant = this.get('current_participant');
      this.current_participant = participant;
      this.current_id = participant.get('id');
      this.current_name = participant.get('name');
      console.log("Session setCurrentParticipant", participant, this.current_id);
    }
  });
})();