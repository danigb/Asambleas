(function($) {
  $$.ApplicationPresenter = Backbone.View.extend({
    initialize: function() {
      //  _.bindAll(this, 'changeCurrentTopic', 'newTopic');
      
      $$.Session.bind('change:current_topic', this.currentTopicChanged);
      $$.Topics.bind('add', this.newTopic);
      $$.Session.bind('change:current_participant', this.currentParticipantSet);

      $("#info-messages").click($$.LayoutHelper.showMessages);
      $("#info-operations").click($$.LayoutHelper.showOperations);
      $("#info-participants").click($$.LayoutHelper.showParticipants);
      $("#info-entries").click($$.LayoutHelper.showEntries);
      $("#info-topics").click($$.LayoutHelper.showTopics);
      $("#info-assembly").click($$.LayoutHelper.showAssembly);

      $$.LayoutHelper.showMessages();
      $$.LayoutHelper.showParticipants();
      $$.LayoutHelper.showTopics();
    },
    
    currentTopicChanged: function() {
      var current_topic = $$.Session.get('current_topic');
      console.log("SessionPresenter cCT", current_topic);
      $("#entries").empty().append(current_topic.editor.el);
      $$.LayoutHelper.showEntries();
    },

    currentParticipantSet : function() {
      var status = {
        name : $$.Session.current_name,
        participants_count: $$.Participants.length,
        participants_online: $$.Participants.online()
      };
      $("#info-participants").html( ich.participant_status_template(status));
    },

    newTopic : function(topic) {
      if ($$.Topics.length == 1) {
        topic.set({
          selected : true
        });
        $$.Session.set({
          current_topic : topic
        });
      }
    }
  });

})(jQuery);