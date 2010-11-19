(function() {
  $$.TopicEditorView = Backbone.View.extend({
    events: {
      'keypress .new-entry':  'createOnEnter'
    },
    
    initialize: function() {
      this.id = _.uniqueId('ed')
      this.topic = this.model;
      this.topic.view = this;
      this.entries = this.options.entries;
      this.el = ich.topic_editor_template(this.topic.toJSON());
      this.entries.view = new $$.EntryListPresenter({
        el : $('.list', this.el),
        model : this.entries
      });

      this.input = this.$('.new-entry');

      _.bindAll(this, 'render', 'createOnEnter');

      this.topic.bind('change', this.render);
      this.input.keypress(this.createOnEnter);
    },
    
    render: function() {
      // convetion
      return this;
    },
    createOnEnter : function(e) {
      if (e.keyCode == 13) {
        console.log("TopicEditorPresenter ENTER");
        $$.create('Entry', {
          body : this.input.val(),
          topic_id : this.topic.get('operation_id')
        });
        this.input.val('');
        return false;
      }
      return true;
    }
  });
})();