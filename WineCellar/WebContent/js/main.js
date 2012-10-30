$(document).ready(function(){
	initializeEvents();
	initializeAppearance();
});

function initializeEvents(){
	$("#getVineyards").click(function(){
		$("#vineyards").html("");
		getVineyards(null);	
	});
	
	$("#getVarietals").click(function(){
		$("#varietals").html("");
		getVarietals(null);
	});
	
	$("#getWines").click(function(){
		$("#wines").html("");
		getWines(null);
	});

	$("#getWineSummaries").click(function(){
		$("#wineSummaries").html("");
		getWineSummaries(null);
	});
}

function initializeAppearance(){
	$("#getVarietals, #getVineyards, #getWines, #getWineSummaries").button();	
}

function getVarietals(args){
	$("#varietals").html(pleaseWait());
	$.ajax({
		url: "/getVarietals",
		data: args,
		success: function(resp){
			$varietals = $("#varietals");
			displayResults($varietals, resp);
			$("#getVarietals").button('option', 'label', "Refresh Varietals");
			$("#getVarietals").button("refresh");
		}
	});
}

function getVineyards(args){
	$("#vineyards").html(pleaseWait());
	$.ajax({
		url: "/getVineyards",
		data: args,
		success: function(resp){
			$vineyards = $("#vineyards");						
			displayResults($vineyards, resp);
			$("#getVineyards").button('option', 'label', "Refresh Vineyards");
			$("#getVineyards").button("refresh");
		}
	});
}

function getWines(args){
	$("#wines").html(pleaseWait());
	$.ajax({
		url: "/getWines",
		data: args,
		success: function(resp){
			$wines = $("#wines");						
			displayResults($wines, resp);
			$("#getWines").button('option', 'label', "Refresh Wines");
			$("#getWines").button("refresh");
		}
	});
}

function getWineSummaries(args){
	$("#wineSummaries").html(pleaseWait());
	$.ajax({
		url: "/getWineSummary",
		data: args,
		success: function(resp){
			$wineSummaries = $("#wineSummaries");						
			displayResults($wineSummaries, resp);
			$("#getWineSummaries").button('option', 'label', "Refresh Wine Summary");
			$("#getWineSummaries").button("refresh");
		}
	});
}

function displayResults($target, content){
	$target.html(content);
	$target.hide();
	$target.slideDown(600);
}

function pleaseWait(){
	return "Getting Data. Please Wait...";
}