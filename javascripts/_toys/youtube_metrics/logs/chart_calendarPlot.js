function chart_calendarPlot(inputData)
{
	$("#chart_timeline_chart_calendar").html("")
				
	google.charts.load('current', {'packages':['calendar']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {				
		var chartData = new google.visualization.DataTable();
		
		// 컬럼 정보
		chartData.addColumn('date', 'Date');
		chartData.addColumn('number', 'views');
		
		

		for(key in inputData.data.full.publish_date){
			tempData = [	new Date(inputData.data.full.publish_date[key]), nullConverter(inputData.data.full.views[key])]
			chartData.addRows([tempData]);
		}

		var options = {
			title: '일별 조회 수',
			width: "100%",
			height: 165 * inputData.data.yearslen,
			calendar: {
				cellColor: {
					stroke: '#76a7fa',
					strokeOpacity: 0.25,
					strokeWidth: 1,
				},
				  focusedCellColor: {
					stroke: '#d3362d',
					strokeOpacity: 1,
					strokeWidth: 1,
				  }
			}
		};

		var formatter = new google.visualization.DateFormat({pattern: 'yyyy-MM-dd'});
		formatter.format(chartData, 0);
		var chart = new google.visualization.Calendar(document.getElementById('chart_timeline_chart_calendar'));
		chart.draw(chartData, options);
		
		$(window).smartresize(function () {
			chart.draw(chartData, options);
		});
	}
}