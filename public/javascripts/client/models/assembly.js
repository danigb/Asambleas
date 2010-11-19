/**
 * A Repository of operations
 */
(function() {
  $$.Assembly = Backbone.Model.extend({
    initialize : function() {
      new $$.AssemblyView({
        model: this
      });
    }
  });
})();