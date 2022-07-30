function chart_pageView()
{
	$("#chart_pageView").hide()
	
	$.ajax({
		url : "/operation/get_pageview/",
		success:function(data){
			google.charts.load('current', {'packages':['annotationchart']});
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {
				var chartData = new google.visualization.DataTable();
				chartData.addColumn('date', 'Period');
				chartData.addColumn('number', 'Page View');

				for(key in data.pageViewVec){
					chartData.addRows([[	new Date(data.pageViewVec[key].yearDate), nullConverter(data.pageViewVec[key].count) ]]);
				}

				var options = {
					title: '페이지 뷰',
					vAxis: {title: '페이지 뷰'},
					width: '100%' // 반응형을 위한 width 값 추가
				};

				var formatter = new google.visualization.DateFormat({pattern: 'yyyy-MM-dd'});
				formatter.format(chartData, 0);
				var chart = new google.visualization.AnnotationChart(document.getElementById('chart_pageView'));
				chart.draw(chartData, options);
				
				$(window).smartresize(function () {
					chart.draw(chartData, options);
				});
			}
			
			$("#chart_pageView").show()
			$(".trigger_chart_pageView").hide()
		}
	})
}