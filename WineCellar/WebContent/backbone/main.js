$(document).ready(function(){
	initialize();
	setEvents();
});



function initialize(){
	//The WineApp will update from localStorage upon initialization.
	
	var viewOptions = {
		el: "#appView",
		mobile: true
	};
	
	window.WineApp = new WineAppView(viewOptions);
}

function setEvents(){

}