$(document).ready(function(){
	initialize();
	setEvents();
});



function initialize(){
	window.wineSummaries = JSON.parse(localStorage.wineSummaries);

	//window.WineSummaries = new WineSummaryCollection();
	window.Vineyards = new VineyardCollection();
//	Vineyards.fetchFromLocalStorage();
	window.WineList = new WineSummaryList();
	window.WineCellar = new WineCellarModel();
//	WineCellar.fetchFromLocalStorage();
}

function setEvents(){

}