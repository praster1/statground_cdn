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
			url : url = "/submit_game_correlation/?gameUUID=" + gameUUID + "&submitCorr=" + searchText.toString(),
			success:function(data) {
					$(".trigger_divGameSubmit").hide()
					
					html = '<center>'
					
					html += '<code style="color:DarkBlue; font-size:small;">'
					html += '<b>정답: ' + data.c_true.toString() + '</b>'
					html += '</code>'
					html += '　'
					
					html += '<code style="color:black; font-size:small;">'
					html += '<b>제출한 값: ' + data.c_submit.toString() + '</b>'
					html += '</code>'
					html += '　'
					
					html += '<code style="color:red; font-size:small;">'
					html += '<b>차이: ' + data.c_diff.toString() + '</b>'
					html += '</code>'
					
					html += '<br/><br/>'
					
					var congrat = ""
					if (data.c_diff == data.c_true)	{ congrat = "어떻게 이렇게 정확할 수가 있죠?"; }
					else if (data.c_diff < 0.01)	{ congrat = "완벽해요!"; }
					else if (data.c_diff < 0.05)	{ congrat = "거의 정답에 가까워요!"; }
					else if (data.c_diff < 0.1)		{ congrat = "비슷하게 맞췄네요!"; }
					else if (data.c_diff < 0.2)		{ congrat = "이 정도면 잘 하는 거에요!"; }
					else if (data.c_diff < 0.3)		{ congrat = "아깝네요."; }
					else									{ congrat = "정답과 많이 멀어요."; }
					
					html += '<code style="color:olive; font-size:medium;">'
					html += '<b>' + congrat + '</b>'
					html += '</code>'
											
					html += '<br/><br/>'
					
					html += '<span class="input-group-btn">'
					html += '<button class="btn btn-primary input-lg" type="button" id="btnReplay" name="btnReplay" '
					html += 'onclick="chart_correlationPlot()">'
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