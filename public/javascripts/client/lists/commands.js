(function() {
  var Factories = {
    Repository : {
      GET : function() {
      }
    },
    Topic : {
      POST : function(params) {
        Topics.add({title : params});
        console.log("topic added");
      }
    }
  };

  $$.CommandList = Backbone.Collection.extend({
    model: $$.Command,

    initialize : function() {
      _.bindAll(this, 'process');
      this.bind('add',     this.process);
    },
    process : function(command) {
      Factories[command.get("model_class")][command.get("method")](command.get("params"));
    }
  });
})(jQuery);