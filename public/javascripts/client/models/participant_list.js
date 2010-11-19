(function() {
  $$.ParticipantList = Backbone.Collection.extend({
    model: $$.Participant,

    initialize : function() {
      var byParticipantId = this.byParticipantId = {};
      this.bind('add', function(participant) {
        console.log("REGISTER Participant", participant, participant.get('id'));
        byParticipantId[participant.get('id')] = participant;
      });
    },
    getByParticipantId : function(participant_id) {
      var participant = this.byParticipantId[participant_id];
      console.log("ParticipantList getByParticipantId", participant_id, participant);
      return participant;
    },
    // number of participants online
    online : function() {
      return 0;
    }
  });
})();