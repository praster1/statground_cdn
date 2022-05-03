function ajax_viewercount_table()
{
	$("#viewerCount_table").hide()
	
	$.ajax({
		url : "/get_viewercount/",
		success:function(data){
			var t1 = $('#viewerCount_table').DataTable();
			
			for(key in data.viewerCountVec){
				count_shoppingcow = zeroConverter(data.viewerCountVec[key].count_shoppingcow)
				count = zeroConverter(data.viewerCountVec[key].count)

				html = "<tr>"
				html += "<td style='font-size:small'><b>" + data.viewerCountVec[key].yearDate + "</b></td>"
				html += "<td style='font-size:small'>" + data.viewerCountVec[key].count.toString() + "</td>"
				html += "<td style='font-size:small'>" + data.viewerCountVec[key].cumulativeCount.toString() + "</td>"
				html += "</tr>"
				
				const temp = $(html)
				t1.row.add(temp).draw();
			}
			
			$("#viewerCount_table").show()
			$(".trigger_viewerCount_table").hide()
		}
	})
}