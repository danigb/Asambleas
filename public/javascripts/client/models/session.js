(function() {
  $$.SessionModel = Backbone.Model.extend({
    initialize : function () {
      console.log("Session!");
    },
    current_user : function() {
      return this.get('current_user');
    },
    current_id : function() {
      return this.current_user().cid;
    }

  });
})();