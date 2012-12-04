var AppRouter = Backbone.Router.extend({
	routes : {
		"alert/:id" : "getAlert",
		"*actions" : "defaultRoute" 
	}
});

var app_router = new AppRouter;
app_router.on('route:getAlert', function(id) {
	console.log("Get post number " + id);
});
app_router.on('route:defaultRoute', function(actions) {
	console.log("actions from Router: " + actions);
});
// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();