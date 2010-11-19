/**
 * EntryList
 *
 * title: the title of the entry list
 */
(function() {
  $$.EntryList = Backbone.Collection.extend({
    model: $$.Entry,

    initialize : function() {
    }
  });
})();