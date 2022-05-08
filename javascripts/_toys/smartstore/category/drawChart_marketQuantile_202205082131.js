function drawChart_marketQuantile(inputData, divID, columnName, inputTitle = "제목")
{
	$("#" + divID).hide()
			
	google.charts.load("current", {packages:['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {
		var chartData = new google.visualization.DataTable();
		chartData.addColumn('string', '백분율');
		chartData.addColumn('number', columnName);

		for(key in inputData){ chartData.addRows([ [	key + "%", nullConverter(inputData[key]) ] ]);
		}

		var options = {
			title: inputTitle,
			width: '100%',
			legend: { position: 'bottom' },
			crosshair: {orientation: 'vertical', trigger: 'focus'},
			focusTarget: 'category',
			legend: { position: "none" },
			hAxis: { textStyle: { color: 'green' }, format: 'yy-MM-dd' },
			colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
			explorer: { actions: ['dragToZoom', 'rightClickToReset'], axis: 'horizontal' }
		};

		var chart = new google.visualization.ColumnChart(document.getElementById(divID));
		chart.draw(chartData, options);
		
		$(window).smartresize(function () {
			chart.draw(chartData, options);
		});

	}
	
	$("#" + divID).show()
}