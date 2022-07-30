function chart_correlationPlot()
{
	$(".trigger_divGameOpen").show()
	$("#div_username").html("")
	$("#chart_correlation").html("")
	$("#area_input").show()
	$("#area_input").html("")
	$("#area_result").hide()
	$("#area_result").html("")
	
	var url = "/toys/run_game_correlation/"
	
	$.ajax({
		url : url,
		success:function(data){				
			$("#chart_correlation").html("")
			$("#div_username").html("안녕하세요, " + data.userName.toString() + "님!")
			
			
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);


			function drawChart() {				
				var chartData = new google.visualization.DataTable();
				
				// 컬럼 정보
				chartData.addColumn('number', 'X');
				chartData.addColumn('number', 'Y');
				
				
				for(key in data.data.x_axis){
					tempData = [	data.data.x_axis[key], data.data.y_axis[key] ]
					chartData.addRows([tempData]);
				}

				var options = {
					height: 300,
					width: 300,
					chartArea: {
						height: "86%",
						width: "86%"
					}
				};

				var chart = new google.visualization.ScatterChart(document.getElementById('chart_correlation'));
				chart.draw(chartData, options);
				
				$(window).smartresize(function () {
					chart.draw(chartData, options);
				});
			}
			
			
			html = '<span class="input-group-addon btn-dark" id="btn_sign">　상관계수:　　　' + data.sign.toString() + '</span>'
			
			html += '<input type="number" class="form-control input-lg"'
			html += 'id="inputSearchText" name="inputSearchText"'
			html += 'onKeypress="javascript:if(event.keyCode==13) {btnSearch(\'' + data.gameUUID.toString() + '\')}"'
			html += 'placeholder="" '
			html += 'min="0" max="99" autocomplete="off" '
			html += 'autofocus>'
			
			html += '<span class="input-group-btn">'
			html += '<button class="btn btn-success input-lg" type="button" id="btnSearchText" name="btnSearchText" '
			html += 'onclick="btnSearch(\'' + data.gameUUID.toString() + '\')">'
			html += 'Enter'
			html += '</button>'
			html += '</span>'
			
			$("#area_input").append(html)
			$(".trigger_divGameOpen").hide()
			$('#inputSearchText').focus();
		}
	})
}