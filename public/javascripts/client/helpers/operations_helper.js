/**
 * Operations only can be created (not updated or removed).
 */
(function() {
  $$.create = function(model, params) {
    console.log("JOOODER!", $$.Session.current_id);
    $$.Operations.create(new $$.Operation({
      action : 'create',
      model : model,
      participant_id : $$.Session.current_id,
      params :params
    }));
  }
})();