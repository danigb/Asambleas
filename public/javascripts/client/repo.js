(function ($) {
  Backbone.sync = function(method, model, success, error) {
  }

  var Client =  Backbone.Model.extend({
    initialize : function() {
    },
    
    process : function(parts) {

    }


  });

  function addAction(action) {
    Actions.add({
      action : action
    });

  }

  $(function() {
    window.Client = new Client;
    addAction('#Open Repository');
    addAction('#New topic "Vámonos a otra parte"');

    console.log("Repo.js ready");
  });
})(window.jQuery);