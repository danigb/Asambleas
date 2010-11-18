(function($) {


  $(function() {
    $$.Messages = new $$.MessageList();
    $$.Topics = new $$.TopicList();
    $$.MessagesView = new $$.MessageListView();
    $$.TopicsView = new $$.TopicListView();
    $$.Operations = new $$.OperationList();
    $$.OperationsView = new $$.OperationListView();
    $$.Users = new $$.UserList();
    $$.UsersView = new $$.UserListView();

    var current = new $$.User({
      name : $$.TextHelper.generateRandomWord(8)
    });
    $$.Session = new $$.SessionModel({
      current_user : current
    });

    $$.Users.add(current);
    console.log("CURRENT", current);
    for (var index = 0; index < 10; index++) {
      $$.Users.add({
        name : $$.TextHelper.generateRandomWord(8)
      });
    }


    $$.Layout.init();
    $$.Layout.showOperations();
    $$.Layout.showUsers();
    $$.Operations.add({
      method : 'GET',
      model_class : 'Repository',
      params : 'Repository12354'
    });
    console.log("Client loaded.");
  });
})(jQuery);