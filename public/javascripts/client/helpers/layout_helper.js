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

    showParticipants : function() {
      toggle("participants", "entries");
    },
    showEntries : function() {
      toggle("entries", "participants");
    },
    showTopics : function() {
      toggle("topics", "assembly");
    },
    showAssembly : function() {
      toggle("assembly", "topics");
    }


  };
})(jQuery);