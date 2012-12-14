$(document).ready(function(){
	var viewOptions = {
			el: "#appView",
			mobile: true,
			autoFetch: true
		};
		
		window.WineApp = new WineAppView(viewOptions);
});