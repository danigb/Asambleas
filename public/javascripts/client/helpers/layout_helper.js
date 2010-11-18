(function($) {
  $$.Layout = {
    init : function() {
      $("#info-messages").click($$.Layout.showMessages)
      $("#info-operations").click($$.Layout.showOperations)
    },

    showMessages : function() {
      $("#messages").show();
      $("#info-messages").addClass('active');
      $("#operations").hide();
      $("#info-operations").removeClass('active');
    },
    showOperations : function() {
      $("#messages").hide();
      $("#info-messages").removeClass('active');
      $("#operations").show();
      $("#info-operations").addClass('active');
    }

  };
})(jQuery);