(function($) {
  $$.Command = Backbone.Model.extend({
    POST: "POST", /* create */
    GET: "GET", /* retrieve */
    PUT: "PUT", /* update */
    DELETE: "DELETE", /* delete */

    // attr: method - http method
    // attr: model_class
    // attr: params
    initialize: function() {
      if (!this.get('persistent')) {
        this.set({persistent : false})
      }
    },
    clear: function() {
      this.destroy();
      this.view.remove();
    }
  });
})(jQuery);