function ajax_notice(inputUUID, tableName)
{
	url = "/get_index_notice/" + inputUUID + "/"
	$.ajax({
		url : ,
		success:function(data){
			var t1 = $(tableName).DataTable();
			
			for(key in data){
				html = '<tr>'
				html += '<td style="font-size:small;">'
				html += '<a href="/intro_notice/readArticle/' + data[key].uuid + '/">'
				html += '<span style="color:black">' + textLengthOverCut(data[key].title, 100, " ...") + '</span>'
				html += '</a>'
				html += '</td>'
				html += '<td style="font-size:small;">'
				html += '<span style="color:black">' + data[key].created_at + '</span>'
				html += '</td>'
				html += '</tr>'
				
				const temp = $(html)
				t1.row.add(temp).draw();
			}				
		}
	})
}