<!DOCTYPE>

<html>
	<head>
		<link rel="stylesheet" href="main.css" />
		<jsp:include page="/templates/templates.jsp"></jsp:include>
	</head>
	
	<body>
		<select id="select_models"></select><br/>
		<label for="input_title">Title</label><input id="input_title" />
		<button id="saveVineyard">Save</button>
		<div id="content"></div>
		<ul id="listView"></ul>
		
		
		<script src="/js/lib/jquery-1.8.2.js" type="text/javascript"></script>
		<script src="/js/lib/backbone/underscore-min.js" type="text/javascript"></script>
		<script src="/js/lib/backbone/backbone-min.js" type="text/javascript"></script>
		<script src="/js/lib/backbone/backbone-relational.js" type="text/javascript"></script>
		<script src="/js/lib/backbone/backbone.localStorage.min.js" type="text/javascript"></script>
		<script src="/js/lib/backbone/nesting.js" type="text/javascript"></script>
		
		<script src="/backbone/Model.js" type="text/javascript"></script>
		<script src="/backbone/View.js" type="text/javascript"></script>
		<script src="/backbone/main.js" type="text/javascript"></script>
	</body>
</html>