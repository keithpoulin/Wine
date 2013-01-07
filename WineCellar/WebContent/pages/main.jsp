<!DOCTYPE html>

<html>
	<head>
		<title>Wine Cellar</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">		
		<!-- <link rel="stylesheet" href="/css/jquery-mobile/jquery.mobile-1.2.0.min.css" /> -->
		<link rel="stylesheet/less" href="/templates/css/template_styles.less" />
		<link rel="stylesheet" href="/css/main.css" />
	</head>
	
	<body>		
		
		<header id="header">
			<label for="userId">UserID</label>
			<input type="text" id="userId"/>
			
			<label for="password">Password</label>
			<input type="password" id="password" />
			
			<button id="submitLogin">Login</button>
			<span id="notice"></span>
		</header>
		<div id="appView"></div>				

		<jsp:include page="winecellar_core.jsp"/>
		<script src="/js/main.js" type="text/javascript"></script>
		
	</body>	
</html>