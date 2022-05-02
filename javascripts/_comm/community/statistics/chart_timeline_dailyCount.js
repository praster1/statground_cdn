function chart_timeline_dailyCount()
{
	$("#chart_timeline_dailyCount").hide()
		
	$.ajax({
		url : "/get_community_daily_counts/",
		success:function(data){
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {				
				var chartData = new google.visualization.DataTable();
				
				// 컬럼 정보
				chartData.addColumn('date', 'Date');
				for(key in data.colNames){
					chartData.addColumn('number', data.colNames[key]);
				}
				

				for(key in data.data){
					chartData.addRows([
						[	new Date(data.data[key][0]), 
								nullConverter(data.data[key][1]), 
								nullConverter(data.data[key][2]), 
								nullConverter(data.data[key][3]), 
								nullConverter(data.data[key][4]),
								nullConverter(data.data[key][5]), 
								nullConverter(data.data[key][6]), 
								nullConverter(data.data[key][7])]
					]);
				}

				var options = {
					title: '일별 타임라인 수 (최근 30일)',
					width: '100%',
					legend: { position: 'bottom' },
					crosshair: {orientation: 'vertical', trigger: 'focus'},
					focusTarget: 'category',
					hAxis: { textStyle: { color: 'green' }, format: 'yy-MM-dd' },
					explorer: { actions: ['dragToZoom', 'rightClickToReset'], axis: 'horizontal' },
					isStacked: true
				};

				var formatter = new google.visualization.DateFormat({pattern: 'yyyy-MM-dd'});
				formatter.format(chartData, 0);
				var chart = new google.visualization.ColumnChart(document.getElementById('chart_timeline_dailyCount'));
				chart.draw(chartData, options);
				
				$(window).smartresize(function () {
					chart.draw(chartData, options);
				});
			}
			
			$("#chart_timeline_dailyCount").show()
		}
	})
}