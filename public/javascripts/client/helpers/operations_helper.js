/**
 * Operations only can be created (not updated or removed).
 */
(function() {
  $$.create = function(model, params) {
    $$.Operations.create(new $$.Operation({
      action : 'POST',
      model : model,
      params :params
    }));
  }
})();