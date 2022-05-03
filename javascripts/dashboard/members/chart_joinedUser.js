function chart_joinedUser()
{
	$("#chart_joinedUser").hide()

	$.ajax({
		url : "/get_members/",
		success:function(data){
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {
				var chartData = new google.visualization.DataTable();
				chartData.addColumn('date', 'Period');
				chartData.addColumn('number', 'Page View');

				for(key in data.joinedUserVec){
					chartData.addRows([[	new Date(data.joinedUserVec[key].yearDate), nullConverter(data.joinedUserVec[key].count) ]]);
				}

				var options = {
					bar: {groupWidth: "95%"},
					legend: { position: "none" },
					crosshair: {orientation: 'vertical', trigger: 'focus'},
					focusTarget: 'category',
					hAxis: { textStyle: { color: 'green' }, format: 'yy-MM-dd' },
					explorer: { 
							actions: ['dragToZoom', 'rightClickToReset'],
							axis: 'horizontal'
					}
				};

				var formatter = new google.visualization.DateFormat({pattern: 'yyyy-MM-dd'});
				formatter.format(chartData, 0);
				var chart = new google.visualization.ColumnChart(document.getElementById('chart_joinedUser'));

				chart.draw(chartData, options);
				
				$(window).smartresize(function () {
					chart.draw(chartData, options);
				});
			}
			
			$("#chart_joinedUser").show()
			$(".trigger_chart_joinedUser").hide()
		}
	})
}