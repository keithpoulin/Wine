$(document).ready(function(){
	var viewOptions = {
			el: "#appView",
			mobile: true,
			loadModels: true
		};
		
		window.WineApp = new WineAppView(viewOptions);
});