$.couch.app(function(app) {
  $("#content").evently(app.ddoc.evently.content, app);
  $("#content").pathbinder("recent", "/");
  
  $.pathbinder.begin("/");
});