(function($) {

  $$.TheModelListView = Backbone.View.extend({
    el: $("#theModel"),

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      $$.User.bind('add',     this.addOne);
      $$.User.bind('refresh', this.addAll);
      $$.User.bind('all',     this.render);
    },

    render: function() {
    },

    addOne: function(theModel) {
      var view = new $$.TheModelView({
        model: theModel
      });
      $("#theModels").append(view.render().el);
    },

    addAll: function() {
      $$.TheModel.each(this.addOne);
    }
  });

})(window.jQuery);
