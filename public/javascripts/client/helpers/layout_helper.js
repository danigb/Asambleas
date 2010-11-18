(function($) {

  function toggle(show, hide) {
    $("#" + show).show();
    $("#info-" + show).addClass('active');
    $("#" + hide).hide();
    $("#info-" + hide).removeClass('active');
    
  }

  $$.Layout = {
    init : function() {
      $("#info-messages").click($$.Layout.showMessages);
      $("#info-operations").click($$.Layout.showOperations);
      $("#info-users").click($$.Layout.showUsers);
      $("#info-entries").click($$.Layout.showEntries);
    },

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
    }

  };
})(jQuery);