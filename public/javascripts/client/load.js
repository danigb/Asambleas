(function($) {


  $(function() {
    console.log("EPA", $$);
    $$.Messages = new $$.MessageList
    $$.Topics = new $$.TopicList
    $$.MessagesView = new $$.MessageListView
    $$.TopicsView = new $$.TopicListView
    $$.Session = new $$.SessionModel
    console.log("Client loaded.");
  });
})(jQuery);