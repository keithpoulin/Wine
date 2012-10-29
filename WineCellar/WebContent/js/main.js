$(document).ready(function(){
	initializeEvents();
	initializeAppearance();
});

function initializeEvents(){
	$("#getVineyards").click(function(){
		$("#vineyards").slideUp(200, function(){
			getVineyards(null);
		});		
	});
}

function initializeAppearance(){
	$("#getVineyards").button();
}

function getArticles(args){
	$.ajax({
		url: "http://www.benzawacki.com/article.jsp?num=all&index=0&dir=ascending",
		data: args,
		success: function(resp){
			$("#vineyards").html(resp);
		}
	});
}

function getVineyards(args){
	$.ajax({
		url: "/getVineyards",
		data: args,
		success: function(resp){
			$vineyards = $("#vineyards");						
			displayVineyards(resp);
		}
	});
}

function displayVineyards(vineyards){
	$("#vineyards").html(vineyards);
	$vineyards.slideDown(500);
}