$(document).ready(function() {
	window.WineApp = null;
	initialize();
});

function initialize() {
	ajaxSetup();
	
	$("#submitLogin").click(function(){
		login($("#username").val(), $("#password").val());
		checkPermissions();
	});
	
	if (getCookie("user") != null){
		checkPermissions();
	}
}

function startApp(permission){
	if (permission == "ADMIN"){		
		if (WineApp == null){
			WineApp = new WineAppView({
				el : "#appView"
			});
		}		
	}
}

function stopApp(){
	if (WineApp != null){
		WineApp.remove();
	}
}

function checkPermissions() {
	$.ajax({
		url: "/rest/login",
		dataType: "json",
		success: function(resp){
			console.log("SUCCESS");
			console.log(resp);
			startApp(resp.role);
		}
		,
		error: function(resp){
			console.log("ERROR:");
			console.log(resp);
			stopApp();
		}
	});
	
}

function login(username, password){
	setCookie("user", username, 30);
}

function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value)
			+ ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name){
var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++){
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name){
	    return unescape(y);
	  }
	}
	return null;
}

function ajaxSetup(){
	$.ajaxSetup({
		statusCode : {
			401 : function() {
				// 401 -- FORBIDDEN
//				alert("Reached 401");
				
			},
			403 : function() {
				// 403 -- UNAUTHORIZED
//				alert("Reached 403");
			}
		}
	});
}