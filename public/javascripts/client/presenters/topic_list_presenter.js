(function() {

  $$.TopicListView = Backbone.View.extend({
    el: $("#topics"),

    events: {
      "keypress #new-topic":  "createOnEnter"
    },

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      this.input = $("#new-topic");
      $$.Topics.bind('add',     this.addOne);
      $$.Topics.bind('refresh', this.addAll);
      $$.Topics.bind('all',     this.render);
    },

    render: function() {
    },

    addOne: function(topic) {
      console.log("TopicListPresenter AddOne");
      var view = new $$.TopicView({
        model: topic
      });
      $("#topics .output").append(view.el);
    },

    addAll: function() {
      Topics.each(this.addOne);
    },
    createOnEnter: function(e) {
      if (e.keyCode == 13) {
        $$.create('Topic', {
          title : this.input.val()
        });
        this.input.val('');
        return false;
      }
      return true;
    }
  });

})();
