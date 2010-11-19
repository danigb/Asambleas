(function($) {

  $$.TheModelListView = Backbone.View.extend({
    el: $("#theModel"),

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      $$.Participant.bind('add',     this.addOne);
      $$.Participant.bind('refresh', this.addAll);
      $$.Participant.bind('all',     this.render);
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
