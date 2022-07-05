function chart_main_cntPageviewPerViewer()
{
	$.ajax({
		url : "/get_main_pageview/",
		success:function(data){
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {
				var chartData = new google.visualization.DataTable();
				chartData.addColumn('date', 'Date');
				chartData.addColumn('number', 'Page View per Viewer');

				for(key in data){
					chartData.addRows([
						[	new Date(data[key].yearDate), 
							nullConverter(data[key].cntPageviewPerViewer)
						]
					]);
				}

				var options = {
					title: '접속자당 페이지 뷰 평균',
					width: '100%',
					legend: { position: 'bottom' },
					crosshair: {orientation: 'vertical', trigger: 'focus'},
					focusTarget: 'category',
					hAxis: { textStyle: { color: 'green' }, format: 'yy-MM-dd' },
					explorer: { actions: ['dragToZoom', 'rightClickToReset'], axis: 'horizontal' }
				};

				var formatter = new google.visualization.DateFormat({pattern: 'yyyy-MM-dd'});
				formatter.format(chartData, 0);
				var chart = new google.visualization.ColumnChart(document.getElementById('chart_main_cntPageviewPerViewer'));
				chart.draw(chartData, options);
				
				$(window).smartresize(function () {
					chart.draw(chartData, options);
				});
			}
			
			$("#chart_main_cntPageviewPerViewer").show()
		}
	})
}