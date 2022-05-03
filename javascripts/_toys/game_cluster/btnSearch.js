function btnSearch(gameUUID) 
{
	$("#area_input").hide()
	$("#area_result").show()

	var searchText = $("#inputSearchText").val()
	
	if (searchText == "" || searchText == null)
	{
		alert("값을 입력해주세요.")
		$("#area_input").show()
		$("#area_result").hide()
		
	} else {
		$(".trigger_searchText").show()
		$('#inputSearchText').attr('disabled', true);
		$('#btnSearchText').attr('disabled', true);
	
		$.ajax({
			url : url = "/submit_game_cluster/?gameUUID=" + gameUUID + "&submitCluster=" + searchText.toString(),
			success:function(data) {
					$(".trigger_divGameSubmit").hide()
					$("#chart_cluster").html("")
					
					google.charts.load('current', {'packages':['corechart']});
					google.charts.setOnLoadCallback(drawChart);


					function drawChart() {				
						var chartData = new google.visualization.DataTable();
						
						// 컬럼 정보
						chartData.addColumn('string', 'id');
						chartData.addColumn('number', 'X');
						chartData.addColumn('number', 'Y');
						chartData.addColumn('string', 'cluster');
						chartData.addColumn('number', 'bubble size');
						
						
						for(key in data.data.x_axis){
							tempData = [	'', data.data.x_axis[key], data.data.y_axis[key], data.data.cluster[key].toString(), 0.01 ]
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

						var chart = new google.visualization.BubbleChart(document.getElementById('chart_cluster'));
						chart.draw(chartData, options);
						
						$(window).smartresize(function () {
							chart.draw(chartData, options);
						});
					}
					
					html = '<center>'
					
					html += '<code style="color:DarkBlue; font-size:small;">'
					html += '<b>정답: ' + data.n_cluster.toString() + '</b> (표준편차: ' +  + data.sd.toString() + ')'
					html += '</code>'
					html += '　'
					
					html += '<code style="color:black; font-size:small;">'
					html += '<b>제출한 값: ' + data.n_submit.toString() + '</b>'
					html += '</code>'
					html += '　'
					
					html += '<code style="color:red; font-size:small;">'
					html += '<b>차이: ' + data.n_diff.toString() + '</b>'
					html += '</code>'
					
					html += '<br/><br/>'
					
					var congrat = ""
					if (data.n_diff == 0)			{ congrat = "어떻게 이렇게 정확할 수가 있죠?"; }
					else if (data.n_diff == 1)	{ congrat = "거의 맞았어요!"; }
					else								{ congrat = "아깝네요."; }
					
					html += '<code style="color:olive; font-size:medium;">'
					html += '<b>' + congrat + '</b>'
					html += '</code>'
											
					html += '<br/><br/>'
					
					html += '<span class="input-group-btn">'
					html += '<button class="btn btn-primary input-lg" type="button" id="btnReplay" name="btnReplay" '
					html += 'onclick="chart_clusterPlot()">'
					html += 'Replay'
					html += '</button>'
					html += '</span>'

					html += '</center>'
					
					$("#area_result").append(html)
					$("#btnReplay").focus()
				}
		})
	}
}