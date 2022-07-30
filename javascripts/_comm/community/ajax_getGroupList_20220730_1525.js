function ajax_getGroupList()
{
	divName = "#btn_groupList"
	
	html = ''
	html += '<a href="#show-panel-heading" class="btn btn-danger" onclick="changeCommunityList(null, null)" role="button">'
	html += '<b>전체 보기<b><br/>'
	html += '</a>'
	
	$(divName).append(html)


	$.ajax({
		url : "/community/get_community_groupList/",
		success:function(data){
			
			// 칼럼니스트
			counter = 0
			for(key in data){
				btnType = "primary"
				
				if (counter > 2) {
					btnType = "info"
					divName = "#btn_groupList2"
				}
				
				html = ''
				html += '<a href="#show-panel-heading" class="btn btn-' + btnType + '" onclick="changeCommunityList(\'group\', \'' + data[key].id.toString()+ '\')" role="button">'
				html += '<i class="fa-brands fa-facebook"></i> <b>' + data[key].name.toString() + '</b><br/>'
				html += '멤버:' + data[key].members.toString() + '명'
				html += '</a>'
				
				
				$(divName).append(html)
				counter += 1
			}				
		}
	})
}