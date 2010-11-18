(function($) {
  $$.Message = Backbone.Model.extend({
    DONE: "done",
    PENDING: "pending",
    initialize: function() {
      if (!this.get("status")) {
        this.set({
          "status": this.PENDING
        });
      }
    },
    clear: function() {
      this.destroy();
      this.view.remove();
    }
  });
})(jQuery);