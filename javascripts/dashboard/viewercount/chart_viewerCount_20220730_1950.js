function chart_viewerCount()
{
	$("#chart_viewerCount").hide()

	$.ajax({
		url : "/operation/get_viewercount/",
		success:function(data){
			google.charts.load('current', {'packages':['annotationchart']});
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {
				var chartData = new google.visualization.DataTable();
				chartData.addColumn('date', 'Period');
				chartData.addColumn('number', 'Viewer Count');

				for(key in data.viewerCountVec){
					chartData.addRows([[	new Date(data.viewerCountVec[key].yearDate), nullConverter(data.viewerCountVec[key].count) ] ]);
				}

				var options = {
					title: '접속자 수',
					vAxis: {title: '접속자 수'},
					width: '100%' // 반응형을 위한 width 값 추가
				};

				var formatter = new google.visualization.DateFormat({pattern: 'yyyy-MM-dd'});
				formatter.format(chartData, 0);
				var chart = new google.visualization.AnnotationChart(document.getElementById('chart_viewerCount'));
				chart.draw(chartData, options);
				
				$(window).smartresize(function () {
					chart.draw(chartData, options);
				});
			}
			
			$("#chart_viewerCount").show()
			$(".trigger_chart_viewerCount").hide()
		}
	})
}