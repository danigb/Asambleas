(function() {
  $$.UserList = Backbone.Collection.extend({
    model: $$.User,
    // number of users online
    online : function() {
      return 10;
    }
  });
})();