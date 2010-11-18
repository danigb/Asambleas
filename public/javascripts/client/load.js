(function($) {


  $(function() {
    $$.Messages = new $$.MessageList();
    $$.Topics = new $$.TopicList();
    $$.MessagesView = new $$.MessageListView();
    $$.TopicsView = new $$.TopicListView();
    $$.Operations = new $$.OperationList();
    $$.OperationsView = new $$.OperationListView();
    $$.Session = new $$.SessionModel();


    $$.Layout.init();
    $$.Layout.showOperations();
    $$.Operations.add({method : 'GET', model_class : 'Repository',
      params : 'Repository12354'});
    console.log("Client loaded.");
  });
})(jQuery);