function drawChart_trend(inputData)
{
	$("#analysisReport_chart_trend").hide()
			
	google.charts.load('current', {'packages':['annotationchart']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {
		var chartData = new google.visualization.DataTable();
		chartData.addColumn('date', 'Date');
		chartData.addColumn('number', 'Ratio');

		for(key in inputData.date){
			chartData.addRows([
				[	new Date(inputData.date[key]), 
					nullConverter(inputData.total[key])
				]
			]);
		}

		var options = {
			title: '구간별 클릭량의 상대적 비율',
			subtitle: '(구간별 결과에서 가장 큰 값을 100으로 설정한 상댓값입니다.)',
			width: '100%',
			legend: { position: 'bottom' },
			crosshair: {orientation: 'vertical', trigger: 'focus'},
			focusTarget: 'category',
			hAxis: { textStyle: { color: 'green' }, format: 'yy-MM-dd' },
			explorer: { actions: ['dragToZoom', 'rightClickToReset'], axis: 'horizontal' }
		};

		var formatter = new google.visualization.DateFormat({pattern: 'yyyy-MM-dd'});
		formatter.format(chartData, 0);
		var chart = new google.visualization.LineChart(document.getElementById('analysisReport_chart_trend'));
		chart.draw(chartData, options);
		
		$(window).smartresize(function () {
			chart.draw(chartData, options);
		});

	}
	
	$("#analysisReport_chart_trend").show()
}