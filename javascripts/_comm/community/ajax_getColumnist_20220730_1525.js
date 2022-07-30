function ajax_getColumnist()
{
	$.ajax({
		url : "/community/get_community_columnist/",
		success:function(data){
			var t1 = $('#table_community_columnist').DataTable();


			// 전체보기
			html = '<tr>'
			html += '<td style="font-size:small;">'
			html += '<a href="#show-panel-heading" onclick="changeCommunityList(null, null)" class="target">'
			html += '<span style="color:red"><b>전체보기</b></span>'
			html += '</a>'
			html += '</td>'
			html += '</tr>'
		
			const temp = $(html)
			t1.row.add(temp).draw();
			
			
			// 칼럼니스트
			for(key in data){
				userName = data[key].username.toString()
				html = '<tr>'
				html += '<td style="font-size:small;">'
				html += '<a href="#show-panel-heading" onclick="changeCommunityList(\'columnnist\', \'' + userName + '\')" class="target">'
				if (data[key].type.toString() == "mostWriter") {
					html += '<span style="color:blue"><b>' + userName + '</b></span>'
					html += '<br/>'					
					html += '<code style="color:blue; font-size:small;">최근 많은 게시물</code>'
				} else {
					html += '<span style="color:DarkBlue"><b>' + userName + '</b></span>'
					html += '<br/>'
					html += '<code style="color:DarkBlue; font-size:small;">고정 칼럼니스트</code>'
				}
				
				html += '</a>'
				html += '</td>'
				html += '</tr>'
				
				const temp = $(html)
				t1.row.add(temp).draw();
			}				
		}
	})
}