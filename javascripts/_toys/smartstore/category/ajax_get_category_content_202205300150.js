function ajax_get_category_content(categoryCode)
{
	$("#analysisReport_chart_trend").empty()
	$("#divResult").hide()
	$(".trigger_wait_analysisReport").show()

	ajax_get_category_content_chart_trend(categoryCode)
	ajax_get_category_content_market_info(categoryCode)
	ajax_get_category_content_product_list_table(categoryCode)
	ajax_get_category_content_keyword_list_table(categoryCode)
	
	$(".trigger_wait_analysisReport").hide()
	$("#divResult").show()

	// 키워드 목록 다운로드 버튼
	$("#keywordListDownload").empty()
	html = '<a href="/data/readDataInfo/NAVER_Shopping/' + categoryCode.toString() +'-keywords/" class="btn" role="button" target="_blank">'
	html += '<span class="input-group-addon btn-danger btn-xs">'
	html += '<i class="fa-solid fa-download" style="color:white;" aria-hidden="true"></i>　키워드 목록 다운로드'
	html += '</span>'
	$("#keywordListDownload").append(html)
}