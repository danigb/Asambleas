(function($) {
  $$.Operation = Backbone.Model.extend({
    POST: "POST", /* create */
    GET: "GET", /* retrieve */
    PUT: "PUT", /* update */
    DELETE: "DELETE", /* delete */

    // attr: method - http method
    // attr: model_class
    // attr: params
    initialize: function() {
      if (!this.get('user_id')) {
        this.set({
          user_id : $$.Session.current_id()
          });
      }
      if (!this.get('persistent')) {
        this.set({
          persistent : false
        })
      }
      this.set({user_name : $$.Users.getByCid(this.get('user_id')).get('name')})
    },
    clear: function() {
      this.destroy();
      this.view.remove();
    }
  });
})(jQuery);