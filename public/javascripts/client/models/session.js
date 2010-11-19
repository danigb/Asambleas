(function() {
  $$.SessionModel = Backbone.Model.extend({
    initialize : function () {
      console.log("Session!");
    },
    current_user : function() {
      return this.get('current_user');
    },
    current_name : function() {
      var cu = this.current_user();
      return cu ? cu.get('name') : null;
    },
    current_id : function() {
      var cu = this.current_user();
      return cu ? cu.get('id') : null;
    }

  });
})();