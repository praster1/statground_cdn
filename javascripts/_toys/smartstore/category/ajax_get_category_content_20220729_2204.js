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
}