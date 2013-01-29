$(document).on("mobileinit", function(){
  $.extend(  $.mobile , {
	 pushStateEnabled: true,
	 hashListeningEnabled: true,
	 linkBindingEnabled: true
  });
});

$(document).on( "pagebeforechange", function( e, data ) {
	if ( typeof data.toPage === "string" ) {
		var u = $.mobile.path.parseUrl( data.toPage ),
			re = /^#wineDetail/;
		if ( u.hash.search(re) !== -1 ) {
			try{
				var wineId = u.hash.replace( /.*wineDetail=/, "" );
				console.log("setting WineId to " + wineId);
				WineApp.views.wineDetail.setWineId(wineId);
				$.mobile.changePage( $("#wineDetail"), {dataUrl: u.hash});
				WineApp.views.wineDetail.render();
			}catch(e){
				console.log("failed to set wineId");
			}
			e.preventDefault();
		}
	}
});

