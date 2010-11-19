(function() {
  $$.TopicList = Backbone.Collection.extend({
    model: $$.Topic,
    initialize : function() {
      var byOperationId = this.byOperationId = {};
      this.bind('add', function(topic) {
        console.log("Register Topic", topic, topic.get('operation_id'));
        byOperationId[topic.get('operation_id')] = topic;
      });
    },
    getByOperationId : function(operation_id) {
      var topic = this.byOperationId[operation_id];
      console.log("TopicList getByOperationId", operation_id, topic)
      return topic;
    }
  });
})();
