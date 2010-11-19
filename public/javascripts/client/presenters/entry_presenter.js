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
      data.user = $$.Participants.getByUserId(data.user_id);
      data.user_name = data.user.get('name');
      data.user_color = data.user.get('color');
      this.el = ich.entry_template(data);
      return this;
    }
  });

})(jQuery);