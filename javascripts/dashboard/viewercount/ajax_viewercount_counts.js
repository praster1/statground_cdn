function ajax_viewercount_counts()
{
	$.ajax({
		url : "/get_viewercount/",
		success:function(data){

			html = '<strong class="amount">' + data.viewerCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#viewerCount").append(html)

			html = '<strong class="amount">' + data.viewerCountYesterday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#viewerCountYesterday").append(html)

			html = '<strong class="amount" >' + data.viewerCountToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#viewerCountToday").append(html)
			
			$(".trigger_viewerCount").hide()
		}
	})
}