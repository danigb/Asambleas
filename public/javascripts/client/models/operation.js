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
    initialize: function() {
      if (!this.get('participant_id')) {
        this.set({
          participant_id : $$.Session.current_id
        });
      }
    //this.set({participant_name : $$.Participants.getByCid(this.get('participant_id')).get('name')})
    },
    clear: function() {
      this.destroy();
      this.view.remove();
    }
  });
})(jQuery);