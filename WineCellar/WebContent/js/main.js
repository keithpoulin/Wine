$(document).ready(function(){
	$("#getVineyards").click(function(){
		getVineyards(null);
	});
});

function getVineyards(args){
	$.ajax({
		url: "/getVineyards",
		data: args,
		success: function(resp){
			displayVineyards(resp);
		}
	});
}

function displayVineyards(vineyards){
	$("#vineyards").html(vineyards);
}