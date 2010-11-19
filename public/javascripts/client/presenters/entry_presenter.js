(function() {
  $$.EntryView = Backbone.View.extend({
    tagName:  "div",
    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.model.view = this;
    },
    render: function() {
      var data = this.model.toJSON();
      data.participant = $$.Participants.getByParticipantId(data.participant_id);
      data.participant_name = data.participant.get('name');
      data.participant_color = data.participant.get('color');
      this.el = ich.entry_template(data);
      return this;
    }
  });

})(jQuery);