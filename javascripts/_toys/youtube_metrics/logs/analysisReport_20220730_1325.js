function analysisReport(logUUID = null) 
{
	$(".trigger_wait_analysisReport").show();
	$(".trigger_analysisReport").hide();
	$(".trigger_danger_analysisReport").hide();

	var url = "/youtube_metrics/get_youtube_metrics_specific_log/"
	
	if (logUUID != null) {
		url += logUUID + "/"
	}
	
	$.ajax({
		url : url,
		success:function(data){
			changeTitle(data.info.details.title.toString() + " 채널 분석 결과")
			analysisReport_profile(data)
			analysisReport_views(data)
			analysisReport_length(data)
			analysisReport_publish_date(data)
			chart_calendarPlot(data)
			
			$(".trigger_wait_analysisReport").hide();
			$(".trigger_analysisReport").show();
		},
		
		error: function(error) {
			$(".trigger_danger_analysisReport").show();
			$(".trigger_wait_analysisReport").hide();
		}
	})
}