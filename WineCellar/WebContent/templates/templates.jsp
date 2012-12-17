<link rel="stylesheet/less" href="/templates/css/m_WineSummary.less" />
<link rel="stylesheet/less" href="/templates/css/m_WineDetail.less" />

<script type="text/javascript" src="/js/lib/less-1.3.1.min.js"></script>
<script type="text/javascript" src="/js/lib/accounting.min.js"></script>
<script src="/js/lib/handlebars.js" type="text/javascript"></script>
<script type="text/javascript" src="/templates/js/handlebarsHelpers.js"></script>

<div class="hidden" id="t_wineSummary" type="text/x-handlebars-template">
	<jsp:include page="WineSummary.html" />
</div>

<div class="hidden" id="t_m_wineSummary" type="text/x-handlebars-template">
	<jsp:include page="m_WineSummary.html" />
</div>

<div class="hidden" id="t_m_WineDetail" type="text/x-handlebars-template">
	<jsp:include page="m_WineDetail.html" />
</div>

<div class="hidden" id="t_m_TastingNotes" type="text/x-handlebars-template">
	<jsp:include page="m_TastingNotes.html" />
</div>

<div class="hidden" id="t_m_PurchaseDetails" type="text/x-handlebars-template">
	<jsp:include page="m_PurchaseDetails.html" />
</div>

<div class="hidden" id="t_WineApp" type="text/x-handlebars-template">
	<jsp:include page="WineApp.html" />
</div>

<div class="hidden" id="t_select_brands" type="text/x-handlebars-template">
	<jsp:include page="select_brands.html" />
</div>

<div class="hidden" id="t_select_vineyards" type="text/x-handlebars-template">
	<jsp:include page="select_vineyards.html" />
</div>