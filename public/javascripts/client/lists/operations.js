(function() {
  var Factories = {
    Repository : {
      GET : function() {
      }
    },
    Topic : {
      POST : function(params) {
        $$.Topics.add({title : params});
        console.log("topic added");
      }
    }
  };

  $$.OperationList = Backbone.Collection.extend({
    model: $$.Operation,

    initialize : function() {
      _.bindAll(this, 'process');
      this.bind('add',     this.process);
    },
    process : function(Operation) {
      var clazz = Operation.get("model_class");
      var method = Operation.get("method");
      var params = Operation.get("params");
      console.log("ADD OPERATION", clazz, method, params);
      Factories[clazz][method](params);
    }
  });
})(jQuery);