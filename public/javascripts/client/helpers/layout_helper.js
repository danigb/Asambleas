(function($) {

  function toggle(show, hide) {
    $("#" + show).show();
    $("#info-" + show).addClass('active');
    $("#" + hide).hide();
    $("#info-" + hide).removeClass('active');
    
  }

  $$.LayoutHelper = {

    showMessages : function() {
      toggle("messages", "operations");
    },
    showOperations : function() {
      toggle("operations", "messages");
    },

    showUsers : function() {
      toggle("users", "entries");
    },
    showEntries : function() {
      toggle("entries", "users");
    },
    showTopics : function() {
      toggle("topics", "assembly");
    },
    showAssembly : function() {
      toggle("assembly", "topics");
    }


  };
})(jQuery);