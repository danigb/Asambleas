(function() {
  $$.ParticipantList = Backbone.Collection.extend({
    model: $$.Participant,

    initialize : function() {
      var byUserId = this.byUserId = {};
      this.bind('add', function(participant) {
      console.log("REGISTER Participant", participant, participant.get('user_id'));
        byUserId[participant.get('user_id')] = participant;
      });
    },
    getByUserId : function(user_id) {
      return this.byUserId[user_id];
    },
    // number of users online
    online : function() {
      return 0;
    }
  });
})();