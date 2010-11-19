(function() {
  $$.TopicView = Backbone.View.extend({
    // it doesn't work, i don't know why
    events: {
      "click":  "selectTopic"
    },
    initialize: function() {
      console.log("TopicView init");
      _.bindAll(this, 'render', 'close', 'selectTopic');
      this.model.bind('change', this.render);
      this.model.view = this;
      this.el = $('<div class="TopicView" />');
      this.render();
      $(this.el).click(this.selectTopic);
    },
    render: function() {
      $(this.el).html(ich.topic_template(this.model.toJSON(), true));
      return this;
    },
    selectTopic : function() {
      $$.Session.get('current_topic').set({selected : false});
      this.model.set({selected : true});
      $$.Session.set({current_topic : this.model});
    }
  });
})();