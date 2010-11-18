(function($) {

  $(function() {
    Backbone.sync = function(method, model, success, error) {
    }

    window.Action = Backbone.Model.extend({
      DONE: "done",
      initialize: function() {
        if (!this.get("status")) {
          this.set({
            "status": this.DONE
          });
        }
      },
      clear: function() {
        this.destroy();
        this.view.remove();
      }
    });

    window.ActionView = Backbone.View.extend({
      tagName:  "li",
      initialize: function() {
        _.bindAll(this, 'render', 'close');
        this.model.bind('change', this.render);
        this.model.view = this;
      },
      render: function() {
        this.el = ich.action_template(this.model.toJSON());
        return this;
      },
      setContent: function() {
        var content = this.model.get('content');
        this.$('.todo-content').text(content);
        this.input = this.$('.todo-input');
        this.input.bind('blur', this.close);
        this.input.val(content);
      }
    });


    window.ActionList = Backbone.Collection.extend({
      model: Action
    });
    window.Actions = new ActionList;


    window.ActionListView = Backbone.View.extend({
      el: $("#actions"),
      //  statusTemplate: _.template($('#action-status-template').html()),
      
      events: {
        "keypress #new-action":  "createOnEnter"
      },
      
      initialize: function() {
        console.log("Init")
        _.bindAll(this, 'addOne', 'addAll', 'render');

        this.input = $("#new-action");

        Actions.bind('add',     this.addOne);
        Actions.bind('refresh', this.addAll);
        Actions.bind('all',     this.render);
      },
      
      // Re-rendering just means refreshing the statistics -- the rest
      // of the app doesn't change.
      render: function() {
        return;

        this.$('#action .status').html(this.statusTemplate({
          actions:   Actions.length,
          commands:  0,
          messages:  0
        }));
      },

      addOne: function(action) {
        var view = new ActionView({
          model: action
        });
        $("#actions .output").append(view.render().el);
      },

      addAll: function() {
        Actions.each(this.addOne);
      },

      newAttributes: function() {
        return {
          action: this.input.val()
        };
      },
      createOnEnter: function(e) {
        if (e.keyCode != 13) return;
        Actions.add(this.newAttributes());
        this.input.val('');
        return false;
      }

    });

    window.ActionsView = new ActionListView;

    Actions.add({
      action : 'Open Repository'
    });
    console.log("Actions");



  });
})(window.jQuery);