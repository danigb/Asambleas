(function() {
  var Factories = {
    Topic : {

    },
    Entry : {
      create : function(attributes) {
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
      this.bind('add', $$.ExecuteHelper);
    }
  });
})(jQuery);