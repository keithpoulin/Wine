<!DOCTYPE html>
<html>
	<head>
		<title>Wine Cellar</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/styles/mobile.css" />
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
	</head>
	
	<body>
		
		<!-- Start of first page: #one -->
		<div data-role="page" id="one">
		
			<div data-role="header">
				<h1>Wine Cellar</h1>
			</div><!-- /header -->
		
			<div data-role="content" >	
				<h2>Wine Summary List</h2>
				
				<p>
					This page requires that you have data already loaded into <code>localStorage</code>. 
				</p>	
				<div id="buttonDiv"><button id="updateData" data-icon="refresh" data-role="button">Update Data</button></div>
				<ul data-role="listview" id="wineSummaries" data-theme="d" data-divider-theme="d"><li>test</li></ul>
		
				<h3>Show internal pages:</h3>
				<p><a href="#two" data-role="button">Show page "two"</a></p>	
				<p><a href="#popup" data-role="button" data-rel="dialog" data-transition="pop">Show page "popup" (as a dialog)</a></p>
			</div><!-- /content -->
			
			<div data-role="footer" data-theme="d">
				<h4>Page Footer</h4>
			</div><!-- /footer -->
		</div><!-- /page one -->
		
		
		<!-- Start of second page: #two -->
		<div data-role="page" id="two" data-theme="a">
		
			<div data-role="header">
				<h1>Two</h1>
			</div><!-- /header -->
		
			<div data-role="content" data-theme="a">	
				<h2>Two</h2>
				<p>I have an id of "two" on my page container. I'm the second page container in this multi-page template.</p>	
				<p>Notice that the theme is different for this page because we've added a few <code>data-theme</code> swatch assigments here to show off how flexible it is. You can add any content or widget to these pages, but we're keeping these simple.</p>	
				<p><a href="#one" data-direction="reverse" data-role="button" data-theme="b">Back to page "one"</a></p>	
				
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
		<jsp:include page="/templates/templates.jsp" />
		
		<script src="/js/data.js" type="text/javascript"></script>
		<script src="/js/filter.js" type="text/javascript"></script>
		<script src="/js/winecellar.js" type="text/javascript"></script>
		<script src="/js/mobile.js" type="text/javascript"></script>
	</body>
</html>
