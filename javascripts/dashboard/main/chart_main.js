function chart_main()
{
	$("#chart_main").hide()

	$.ajax({
		url : "/get_main_pageview/",
		success:function(data){
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {
				var chartData = new google.visualization.DataTable();
				chartData.addColumn('date', 'Date');
				chartData.addColumn('number', 'Page View');
				chartData.addColumn('number', 'Viewer Count');

				for(key in data){
					chartData.addRows([
						[	new Date(data[key].yearDate), 
							nullConverter(data[key].cntPageView), 
							nullConverter(data[key].cntViewer)
						]
					]);
				}

				var options = {
					title: '페이지 뷰(왼쪽, 파란색) / 접속자 수(오른쪽, 빨간색)',
					series: {
					  0: {targetAxisIndex: 0},
					  1: {targetAxisIndex: 1}
					},
					width: '100%',
					legend: { position: 'bottom' },
					crosshair: {orientation: 'vertical', trigger: 'focus'},
					focusTarget: 'category',
					hAxis: { textStyle: { color: 'green' }, format: 'yy-MM-dd' },
					explorer: { actions: ['dragToZoom', 'rightClickToReset'], axis: 'horizontal' }
				};

				var formatter = new google.visualization.DateFormat({pattern: 'yyyy-MM-dd'});
				formatter.format(chartData, 0);
				var chart = new google.visualization.ColumnChart(document.getElementById('chart_main'));
				chart.draw(chartData, options);
				
				$(window).smartresize(function () {
					chart.draw(chartData, options);
				});
			}
			
			$("#chart_main").show()
			$(".trigger_chart_main").hide()
		}
	})
}