$(document).ready(function(){
	initializeTemplates();
	initializeData();
	initializeEvents();
});

function initializeTemplates(){
	window.t_wineSummary = Handlebars.compile($("#t_m_wineSummary").html());
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
}

function displayWineSummaries($target, json){
	var html = "";
	if(json.length == 0){
//		html = msgPleaseWait();
	} else {
		
		for (var i=0; i<data.wineSummaries.length; i++){
			var summary = data.wineSummaries[i];
			summary.detailPage = "#two";
			html += t_wineSummary(summary);
		}
	}
	
	$target.html(html);
	$target.listview("refresh", true);
}
