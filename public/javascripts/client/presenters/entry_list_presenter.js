/**
 * EntryListPresenter({model : ...})
 *
 * model: the list model
 * topic: the topic model
 * 
 */
(function() {
  $$.EntryListPresenter = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      this.model.bind('add',     this.addOne);
      this.model.bind('refresh', this.addAll);
      this.model.bind('all',     this.render);
    },

    render: function() {
    },

    addOne: function(entry) {
      console.log("EntryListView addOne", entry);
      var view = new $$.EntryView({
        model: entry
      });
      $(this.el).append(view.render().el);
    },

    addAll: function() {
      Entrys.each(this.addOne);
    }
  });
})(jQuery);