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
    $$.Session.set({
      assembly : new $$.Assembly(Assembly.attributes)
    });

    // LOAD PARTICIPANTS
    for (var index = 0; index < Assembly.participants.length; index++) {
      $$.Participants.add(new $$.Participant(Assembly.participants[index]));
    }
    var current_user = $$.Participants.getByUserId(Assembly.current_user_id);
    console.log("SET current", current_user)
    $$.Session.set({
      current_user : current_user
    });

    // LOAD OPERATIONS
    for (var opi = 0; opi < Assembly.operations.length; opi++) {
      var operation = Assembly.operations[opi];
      console.log("LOAD OP", operation);
      operation.params = $.parseJSON(operation.params);
      $$.Operations.add(new $$.Operation(operation));
    }




  }

})(jQuery);