function table_statistics()
{
	$.ajax({
		url : "/toys/statistics_game_cluster/",
		success:function(data){
			var tTable = $('#board_game_cluster_statistics').DataTable();
			
			for(key in data.data){
			
				var addRow = '<tr>'
				
				addRow += '<td>'
				
				userName = data.data[key].user_name
				if (data.user_name == userName) {
					addRow += '<span style="font-size:large; color:red;">'
				} else {
					addRow += '<span style="font-size:large; color:black;">'
				}
				
				addRow += '<b>' + userName + '</b>'
				addRow += '</span></a>'

				addRow += "<br/>"

				addRow += '<code style="color:darkgreen; font-size:medium;">'
				addRow += '<b>점수: ' + data.data[key].score.toString() + '</b>'
				addRow += '</code>'
				addRow += '　'
				
				addRow += '<code style="color:darkslateblue; font-size:small;">'
				addRow += '<b>플레이 횟수: ' + data.data[key].count.toString() + '</b>'
				addRow += '</code>'
				addRow += '　'    
				
				addRow += '<code style="color:MediumBlue; font-size:small;">'
				addRow += '<b>평균 차이값: ' + data.data[key].diff.toString() + '</b>'
				addRow += '</code>'

				
				addRow += '</td>'
				addRow += '</tr>';	
				
				const temp = $(addRow)
				tTable.row.add(temp).draw();
				
				$(".trigger_loading").hide()
			}
		}
	})
}