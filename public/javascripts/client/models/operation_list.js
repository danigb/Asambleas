(function() {
  var Factories = {
    Topic : {
      POST : function(attributes) {
        $$.Topics.add(new $$.Topic(attributes));
      }
    },
    Entry : {
      POST : function(attributes) {
        console.log("FACTORY Entry", attributes);
        var topic = $$.Topics.getByOperationId(attributes.topic_id);
        topic.addEntry(new $$.Entry(attributes));
      }
    }
  };

  $$.OperationList = Backbone.Collection.extend({
    model: $$.Operation,
    url: Assembly.operation_url,

    initialize : function() {
      _.bindAll(this, 'execute');
      this.bind('add',     this.execute);
    },
    
    execute : function(operation) {
      var model = operation.get('model');
      var method = operation.get('action');
      var params = operation.get('params');
      params.operation_id = operation.get('id');
      params.user_id = operation.get('user_id');
      Factories[model][method](params);
    }
  });
})(jQuery);