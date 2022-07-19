function get_index_data_portal_count()
{
	$.ajax({
		url : "/get_index_data_portal_count/",
		success:function(data){
			// 데이터 개수
			html = '<strong class="amount">' + numberWithCommas(data.dataCount.toString()) + '</strong>'
			$("#dataPortal_dataCount").append(html)
			$("#dataPortal_dataCount_loader").hide()
			
			
			// 제공자 수
			html = '<strong class="amount">' + numberWithCommas(data.giverCount.toString()) + '</strong>'
			$("#dataPortal_giverCount").append(html)
			$("#dataPortal_giverCount_loader").hide()


			// 카테고리 개수
			html = '<strong class="amount">' + numberWithCommas(data.categoryCount.toString()) + '</strong>'
			$("#dataPortal_categoryCount").append(html)
			$("#dataPortal_categoryCount_loader").hide()
		}
	})
}