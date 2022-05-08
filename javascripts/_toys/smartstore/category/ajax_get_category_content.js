function ajax_get_category_content(categoryCode)
{
	$("#analysisReport_chart_trend").empty()
	$("#divResult").hide()
	$(".trigger_wait_analysisReport").show()

	url = "/getSmartstoreCategoryContent/" + categoryCode.toString() + "/"
	
	$.ajax({
		url : url,
		
		success:function(data){
			drawChart_trend(data.chartData.date)		// 카테고리 트렌드
			drawMarketInfo(data.productInfo)				// 상품 정보
			
			$(".trigger_wait_analysisReport").hide()
			$("#divResult").show()
			
			drawProductList(data.productInfo)		// 상품 목록
			drawKeywordList(data.keywordList)		// 키워드 목록


			$("#analysisReport_url").empty()
			dataURL = "/data/readDataInfo/NAVER_Shopping/" + data.categoryCode + "-date/"
			html = '<a href="https://search.shopping.naver.com/search/category/' + data.categoryCode + '" class="btn" role="button" target="_blank">'
			html += '<span class="input-group-addon btn-success"><i class="fa fa-shopping-cart" style="color:white;" aria-hidden="true"></i> 네이버 쇼핑 바로가기</span>'
			html += '</a>'
			html += '<a href="' + dataURL +'" class="btn" role="button" target="_blank">'
			html += '<span class="input-group-addon btn-danger"><i class="fa fa-tasks" style="color:white;" aria-hidden="true"></i> 데이터 다운로드</span>'
			html += '</a>'
			$("#analysisReport_url").append(html)
		}
	})
}