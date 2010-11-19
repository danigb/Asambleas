(function($) {


  $(function() {
    $$.Messages = new $$.MessageList();
    $$.Topics = new $$.TopicList();
    $$.MessagesView = new $$.MessageListView();
    $$.TopicsView = new $$.TopicListView();
    $$.Operations = new $$.OperationList();
    $$.OperationsView = new $$.OperationListView();
    $$.Participants = new $$.ParticipantList();
    $$.ParticipantsView = new $$.ParticipantListView();


    $$.Session = new $$.SessionModel();
    new $$.ApplicationPresenter();
    
    loadData();
    console.log("Client loaded.");
  });

  function loadData() {
    var assembly = new $$.Assembly(Assembly.attributes);
    $$.Session.set({
      assembly : assembly
    });

    $$.RealTime.connect(assembly.get('id'));

    // LOAD PARTICIPANTS
    for (var parIndex = 0; parIndex < Assembly.participants.length; parIndex++) {
      $$.Participants.add(new $$.Participant(Assembly.participants[parIndex]));
    }
    var current_participant = $$.Participants.getByParticipantId(Assembly.current_participant_id);
    console.log("SET current", current_participant)
    $$.Session.set({
      current_participant : current_participant
    });

    // LOAD OPERATIONS
    for (var opIndex = 0; opIndex < Assembly.operations.length; opIndex++) {
      $$.Operations.receive(Assembly.operations[opIndex]);
    }




  }

})(jQuery);