(function() {
  $$.Topic = Backbone.Model.extend({
    initialize: function() {
      this.entries = new $$.EntryList();
      this.view = new $$.EntryListView(this.entries);
    }
  });
})();