(function() {
  $$.Participant = Backbone.Model.extend({
    initialize : function() {
      console.log("NEW USER", this);

      if (!this.get('color')) {
        this.set({
          color: $$.ColorHelper.generate()
        });
      }
      console.log("EN add user");
    }
  });
})();