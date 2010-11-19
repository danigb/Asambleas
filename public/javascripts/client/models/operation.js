/**
 * Operation
 *
 * :method => one of the methods
 * :model_class => the model to be created
 * :op_code => the operation code id
 * ... (the rest of the attributes)
 * :title => title of the Assembly, Topic
 * :body => body of the Entry
 * 
 */
(function($) {
  $$.Operation = Backbone.Model.extend({
    POST: "POST", /* create */
    GET: "GET", /* retrieve */
    PUT: "PUT", /* update */
    DELETE: "DELETE", /* delete */

    initialize: function() {
      if (!this.get('user_id')) {
        this.set({
          user_id : $$.Session.current_id()
          });
      }
      //this.set({user_name : $$.Participants.getByCid(this.get('user_id')).get('name')})
    },
    clear: function() {
      this.destroy();
      this.view.remove();
    }
  });
})(jQuery);