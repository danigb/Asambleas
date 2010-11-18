(function() {
  $$.User = Backbone.Model.extend({
    initialize : function() {
      if (!this.get('color')) {
        this.set({
          color: $$.ColorHelper.generate()
          });
      }
    }
  });
})();