(function($) {

  $$.UserListView = Backbone.View.extend({
    el: $("#users"),

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      $$.Users.bind('add',     this.addOne);
      $$.Users.bind('refresh', this.addAll);
      $$.Users.bind('all',     this.render);
    },

    render: function() {
      var status = {
        name : $$.Session.current_user().get('name'),
        users_count: $$.Users.length,
        users_online: $$.Users.online()
        };
      $("#info-users").empty().append( ich.user_status_template(status));
    },

    addOne: function(user) {
      var view = new $$.UserView({
        model: user
      });
      $("#users").append(view.render().el);
    },

    addAll: function() {
      $$.Users.each(this.addOne);
    }
  });

})(window.jQuery);
