(function() {
  window.Command = Backbone.Model.extend({
    POST: "POST", /* create */
    GET: "GET", /* retrieve */
    PUT: "PUT", /* update */
    DELETE: "DELETE", /* delete */

    initialize: function() {
      if (!this.get("action")) {
        this.set({
          "action": this.GET
        });
      }
    },
    clear: function() {
      this.destroy();
      this.view.remove();
    }
  });
})(window.jQuery);