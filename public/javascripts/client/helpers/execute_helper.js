(function() {
  $$.ExecuteHelper = function(operation) {
      var model = operation.get('model');
      var method = operation.get('action');
      var params = operation.get('params');
      params.operation_id = operation.get('id');
      params.participant_id = operation.get('participant_id');
      $$.ExecuteHelper[model][method](params);
  }
  
  /** TOPIC **/
  $$.ExecuteHelper.Topic = {
    create : function(attributes) {
      $$.Topics.add(new $$.Topic(attributes));
    }
  }

  /** ENTRY **/
  $$.ExecuteHelper.Entry = {
    create : function(attributes) {
      console.log("FACTORY Entry", attributes);
      var topic = $$.Topics.getByOperationId(attributes.topic_id);
      topic.addEntry(new $$.Entry(attributes));
    }
  }
})();