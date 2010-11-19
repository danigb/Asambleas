(function() {
  $$.OperationList = Backbone.Collection.extend({
    model: $$.Operation,
    url: Assembly.operation_url,

    initialize : function() {
      _.bindAll(this, 'execute');
      this.bind('add', $$.ExecuteHelper);
    },
    receive : function(operation) {
      operation.params = $.parseJSON(operation.params);
      console.log("RECEIVED OP", operation);
      $$.Operations.add(new $$.Operation(operation));
    }
  });
})(jQuery);