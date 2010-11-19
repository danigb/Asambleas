
(function() {
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'delete': 'DELETE',
    'read'  : 'GET'
  }

  var getUrl = function(object) {
    if (!(object && object.url)) throw new Error("A 'url' property or function must be specified");
    return _.isFunction(object.url) ? object.url() : object.url;
  };

  Backbone.sync = function(method, model, success, error) {
    var type = methodMap[method];
    var data = model.toJSON();
    data.params = JSON.stringify(data.params);
    var modelJSON = (method === 'create' || method === 'update') ?
    JSON.stringify({
      operation : data
    }) : null;

    var log_success = function() {
      console.log("Ajax OK! Invoking: ", success);
      success();
    }

    var params = {
      url:          getUrl(model),
      type:         type,
      contentType:  'application/json',
      data:         modelJSON,
      dataType:     'json',
      processData:  false,
      success:      log_success,
      error:        error
    }

    $.ajax(params);
  }
})();