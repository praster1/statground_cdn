function ajax_pageview_table()
{
	$("#pageView_table").hide()
	
	$.ajax({
		url : "/operation/get_pageview/",
		success:function(data){
			var t1 = $('#pageView_table').DataTable();
			
			for(key in data.pageViewVec){
				count_shoppingcow = zeroConverter(data.pageViewVec[key].count_shoppingcow)
				count = zeroConverter(data.pageViewVec[key].count)

				html = "<tr>"
				html += "<td style='font-size:small'><b>" + data.pageViewVec[key].yearDate + "</b></td>"
				html += "<td style='font-size:small'>" + data.pageViewVec[key].count.toString() + "</td>"
				html += "<td style='font-size:small'>" + data.pageViewVec[key].cumulativeCount.toString() + "</td>"
				html += "</tr>"
				
				const temp = $(html)
				t1.row.add(temp).draw();
			}
			
			$("#pageView_table").show()
			$(".trigger_pageView_table").hide()
		}
	})
}