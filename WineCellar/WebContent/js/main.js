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
}

function initializeAppearance(){
	$("#getVarietals, #getVineyards").button();
	
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

function displayResults($target, content){
	$target.html(content);
	$target.hide();
	$target.slideDown(600);
}

function pleaseWait(){
	return "Getting Data. Please Wait...";
}