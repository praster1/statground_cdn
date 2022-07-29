function ajax_get_category_content_market_info(categoryCode)
{
	$(".trigger_wait_divMarket").show()
	$("#divMarket_DataExist").hide()
	$("#divMarket_DataNotExist").hide()
	
	
	url = "/smartstore/getSmartstoreCategoryContent_marketInfo/" + categoryCode.toString() + "/"
	
	$.ajax({
		url : url,
		
		success:function(data){
			drawMarketInfo(data.marketInfo)				// 상품 정보
		}
	})
	
	$(".trigger_wait_divMarket").hide()
}
