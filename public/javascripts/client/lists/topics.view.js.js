(function() {

  $$.TopicListView = Backbone.View.extend({
    el: $("#topics"),

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');

      $$.Topics.bind('add',     this.addOne);
      $$.Topics.bind('refresh', this.addAll);
      $$.Topics.bind('all',     this.render);
    },

    render: function() {
    },

    addOne: function(topic) {
      var view = new TopicView({
        model: topic
      });
      $("#topics").append(view.render().el);
    },

    addAll: function() {
      Topics.each(this.addOne);
    }
  });

})();
