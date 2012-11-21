<!DOCTYPE html>
<html>
	<head>
		<title>Wine Cellar</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/styles/mobile.css" />
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
		<jsp:include page="/templates/templates.jsp" />
	</head>
	
	<body>
		
		<!-- Start of first page: #one -->
		<div data-role="page" id="page_WineSummaries">
			<div data-role="header">
				<a href="#two" data-icon="arrow-l" data-theme="b">Back</a>
				<h1>Wine Summaries</h1>
				<a href="#popup" data-icon="plus" data-theme="b" data-rel="dialog">Add</a>
			</div><!-- /header -->
		
			<div data-role="content" >	
				<div id="buttonDiv"><button id="updateData" data-icon="refresh" data-role="button">Update Data</button></div>
				<ul data-role="listview" id="wineSummaries" data-theme="d" data-divider-theme="d"><li>test</li></ul>
			</div><!-- /content -->
			
			<div data-role="footer" data-theme="d">
				<h4>Page Footer</h4>
			</div><!-- /footer -->
		</div><!-- /page one -->
		
		<!-- Start of second page: #page_WineDetails -->
		<div data-role="page" id="page_WineDetails" data-theme="a">
			<div data-role="header">
				<a href="#page_WineSummaries" data-icon="arrow-l" data-theme="b" data-direction="reverse" data-transition="slide">Back</a>
				<h1>WineDetails</h1>
				<a href="#page_EditDetail" data-theme="b">Edit</a>
			</div><!-- /header -->
		
			<div data-role="content" data-theme="a">	
				<h2>Edit Wine Details</h2>
				
			</div><!-- /content -->
			
			<div data-role="footer">
				<h4>Page Footer</h4>
			</div><!-- /footer -->
		</div><!-- /page two -->
		
		
		<!-- Start of third page: #popup -->
		<div data-role="page" id="popup">
		
			<div data-role="header" data-theme="e">
				<h1>Dialog</h1>
			</div><!-- /header -->
		
			<div data-role="content" data-theme="d">	
				<h2>Popup</h2>
				<p>I have an id of "popup" on my page container and only look like a dialog because the link to me had a <code>data-rel="dialog"</code> attribute which gives me this inset look and a <code>data-transition="pop"</code> attribute to change the transition to pop. Without this, I'd be styled as a normal page.</p>		
				<p><a href="#one" data-rel="back" data-role="button" data-inline="true" data-icon="back">Back to page "one"</a></p>	
			</div><!-- /content -->
			
			<div data-role="footer">
				<h4>Page Footer</h4>
			</div><!-- /footer -->
		</div><!-- /page popup -->
				

		<script src="/js/lib/jquery-1.8.2.js" type="text/javascript"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
		<script src="/js/lib/handlebars.js" type="text/javascript"></script>

		<script src="/js/data.js" type="text/javascript"></script>
		<script src="/js/filter.js" type="text/javascript"></script>
		<script src="/js/winecellar.js" type="text/javascript"></script>
		<script src="/js/mobile.js" type="text/javascript"></script>
	</body>
</html>
