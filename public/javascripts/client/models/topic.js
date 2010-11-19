/**
 * A Topic
 *
 * title: the title of the topic
 * selected: if the current topic is selected in the current session
 */
(function() {
  $$.Topic = Backbone.Model.extend({

    initialize: function() {
      if (!this.get('selected')) {
        this.set({
          selected : false
        });
      }
      // TODO: remove
      this.set({
        id : this.cid
        });
      this.entries = new $$.EntryList();
      this.editor = new $$.TopicEditorView({
        model : this,
        entries : this.entries
        });
      console.log("New Topic ends", this);
    },

    addEntry : function(entry) {
      this.entries.add(entry);
    }
  });
})();