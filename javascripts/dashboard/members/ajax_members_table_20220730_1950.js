function ajax_members_table()
{
	$("#members_list_table").hide()
	
	$.ajax({
		url : "/operation/get_memberList/",
		success:function(data){
			var t1 = $('#members_list_table').DataTable();
			
			for(key in data){
				html = "<tr>"
				html += "<td style='font-size:small'>" + data[key].email.toString() + "</td>"
				html += "<td style='font-size:small'><b>" + textLengthOverCut(data[key].username.toString(), 10) + "</b></td>"
				html += "<td style='font-size:small'>" + data[key].date_last_login.toString() + "</td>"
				html += "<td style='font-size:small'>" + data[key].date_joined.toString() + "</td>"
				html += "</tr>"
				
				const temp = $(html)
				t1.row.add(temp).draw();
			}
			
			$("#members_list_table").show()
			$(".trigger_members_list_table").hide()
		}
	})
}