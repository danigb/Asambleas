(function() {
  $$.MessageList = Backbone.Collection.extend({
    model: $$.Message,

    initialize : function() {
      _.bindAll(this, 'process');
      this.bind('add', this.process);
    },

    process : function(message) {
      message.set({
        status : message.DONE
      });
    }
  });
})(jQuery);