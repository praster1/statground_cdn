function ajax_get_category_content_chart_trend(categoryCode)
{
	$("#analysisReport_chart_trend").empty()
	url = "/getSmartstoreCategoryContent_chartData/" + categoryCode.toString() + "/"
	
	$.ajax({
		url : url,
		
		success:function(data){
			drawChart_trend(data.chartData.date)		// 카테고리 트렌드

			$("#analysisReport_url").empty()
			dataURL = "/data/readDataInfo/NAVER_Shopping/" + data.categoryCode + "-date/"
			html = '<a href="https://search.shopping.naver.com/search/category/' + data.categoryCode + '" class="btn" role="button" target="_blank">'
			html += '<span class="input-group-addon btn-success">'
			html += '<i class="fa-solid fa-cart-arrow-down" style="color:white;" aria-hidden="true"></i> 네이버 쇼핑 바로가기'
			html += '</span>'
			html += '</a>'
			html += '<a href="' + dataURL +'" class="btn" role="button" target="_blank">'
			html += '<span class="input-group-addon btn-danger">'
			html += '<i class="fa-solid fa-download" style="color:white;" aria-hidden="true"></i>　데이터 다운로드'
			html += '</span>'
			html += '</a>'
			$("#analysisReport_url").append(html)
		}
	})
}