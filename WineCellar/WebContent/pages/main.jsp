<!DOCTYPE html>
<html>
	<head>
		<title>Wine Cellar</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">		
		<link rel="stylesheet" href="/css/jquery-mobile/jquery.mobile-1.2.0.min.css" />
		<jsp:include page="/templates/templates.jsp" />	
	</head>
	
	<body>
		<h1 class="msg_loading">Loading Models... Please wait</h1>
		<div id="appView"></div>
		
		<script src="/js/lib/jquery-1.8.2.js" type="text/javascript"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
		<jsp:include page="winecellar_core.jsp"/>
		<script src="/js/main.js" type="text/javascript"></script>
		
	</body>	
</html>