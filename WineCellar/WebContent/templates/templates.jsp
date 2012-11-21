<link rel="stylesheet/less" href="/templates/css/m_WineSummary.less" />
<link rel="stylesheet/less" href="/templates/css/m_WineDetail.less" />

<script type="text/javascript" src="/js/lib/less-1.3.1.min.js"></script>
<script type="text/javascript" src="/js/lib/accounting.min.js"></script>
<script src="/js/lib/handlebars.js" type="text/javascript"></script>
<script type="text/javascript" src="/templates/js/template.js"></script>

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

