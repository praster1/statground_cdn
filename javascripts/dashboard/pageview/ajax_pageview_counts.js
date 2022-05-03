function ajax_pageview_counts()
{
	$.ajax({
		url : "/get_pageview/",
		success:function(data){

			html = '<strong class="amount">' + data.pageView.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#pageView").append(html)

			html = '<strong class="amount">' + data.pageViewYesterday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#pageViewYesterday").append(html)

			html = '<strong class="amount" >' + data.pageViewToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#pageViewToday").append(html)
			
			$(".trigger_pageView").hide()
		}
	})
}