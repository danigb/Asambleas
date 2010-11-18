(function() {
  $$.EntryListView = Backbone.View.extend({
    el : $("<div/>"),


    initialize: function(entries) {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      console.log("ENTRIES", entries);
      entries.bind('add',     this.addOne);
      entries.bind('refresh', this.addAll);
      entries.bind('all',     this.render);
    },

    render: function() {
    },

    addOne: function(entry) {
      var view = new EntryView({
        model: entry
      });
      this.el.append(view.render().el);
    },

    addAll: function() {
      Entrys.each(this.addOne);
    }
  });
})(jQuery);