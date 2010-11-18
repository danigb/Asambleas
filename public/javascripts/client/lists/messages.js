(function() {
  $$.MessageList = Backbone.Collection.extend({
    model: $$.Message,
    splitter: new Splitter(),

    initialize : function() {
      _.bindAll(this, 'process');
      this.bind('add',     this.process);
    },

    process : function(message) {
      var body = message.get('message');
      if (body[0] == '#') {
        body = body.substring(1)
        var parts = this.splitter.split(body, ' ');
        var command = new Command();
        setMethodToCommand(command, parts[0]);
        setModelToCommand(command, parts[1]);
        setParamsToCommand(command, parts[2]);
        Commands.add(command);
        message.set({
          message : body
        });
      } else {
      // send message
      }
      message.set({
        status : message.DONE
      });
    }
  });

  function setMethodToCommand(command, message_method) {
    var method = null;
    message_method = message_method.toUpperCase();
    if (_.indexOf(['OPEN', 'GET'], message_method) >= 0) {
      method = command.GET;
    } else if (_.indexOf(['CREATE', 'NEW', 'ADD'], message_method) >= 0) {
      method = command.POST;
    } else if (_.indexOf(['DELETE', 'DESTROY'], message_method) >= 0) {
      method = command.DELETE;
    } else if (_.indexOf(['EDIT', 'MODIFY', 'UPDATE'], message_method) >= 0) {
      method = command.PUT;
    }
    command.set({
      method : method
    });
  }

  function setModelToCommand(command, message_model) {
    command.set({
      model_class : message_model.capitalize()
      });
  }

  function setParamsToCommand(command, message_params) {
    command.set({
      params : message_params
    });
  }
})(jQuery);