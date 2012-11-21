$(document).ready(function(){
	initializeTemplates();
	initializeData();
	initializeEvents();
});

function initializeTemplates(){
	window.t_wineSummary = Handlebars.compile($("#t_m_wineSummary").html());
	window.t_purchaseDetails = Handlebars.compile($("#t_m_PurchaseDetails").html());
	window.t_tastingNotes = Handlebars.compile($("#t_m_TastingNotes").html());
	window.t_wineDetail = Handlebars.compile($("#t_m_WineDetail").html());
}


function initializeData(){
	data = new Data();
	data.callback = function(){
		data.displayWineSummaries();
	};
	data.$wineSummaries = $("#wineSummaries");
	data.setDisplayWineSummaries(displayWineSummaries);
	filterManager = new FilterManager($("#wineSummaries"));
	data.displayWineSummaries();
}

function initializeEvents(){
	$("#updateData").click(function(){
		data.updateAll();
	});
	
	$("#wineSummaries li").click(function(){
		var wineId = $(this).attr("wineid");
		console.log(wineId);
		displayWineDetail($("#wineDetail"), wineId);
	});
}

function displayWineDetail($target, wineId){
	$target.html( t_wineDetail(data.getWineSummary(wineId)) );
}

function displayWineSummaries($target, json){
	var html = "";
	if(json.length == 0){
//		html = msgPleaseWait();
	} else {
		for (var i=0; i<data.wineSummaries.length; i++){
			var summary = data.wineSummaries[i];
			summary.detailPage = "#page_WineDetails";
			html += t_wineSummary(summary);
		}
	}
	
	$target.html(html);
	try{
		$target.listview("refresh", true);
	}catch(e){
		if (e.message != "cannot call methods on listview prior to initialization; attempted to call method 'refresh'"){
			console.log(e);
		}
	}
}
