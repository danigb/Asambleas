splitter = new Splitter();
if (body[0] == '#') {
  body = body.substring(1)
  var parts = this.splitter.split(body, ' ');
  var command = new Command();
  setMethodToCommand(command, parts[0]);
  setModelToCommand(command, parts[1]);
  setParamsToCommand(command, parts[2]);
  Commands.add(command);
  message.set({
    body : body
  });
} else {

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
