function ajax_read_article(requestUUID)
{
	$.ajax({
		url : "/data_copyright_info/get_copyright_info_readArticle/?requestUUID=" + requestUUID,
		success:function(data){
			// 제목
			title = data.title.toString()
			changeTitle(title)
			html = '<h4 style="color:black"><b>' + title + '</b></h4>'
			$("#title").append(html)
			
			
			// 분류
			html = ""
			
			for(key in data.printCategory)
			{
				html += '<code style="color:' + data.printCategory[key].color.toString() + '"; font-size:small;">'
				html += '<b>' + data.printCategory[key].tag.toString() + '</b>'
				html += '</code>'
				html += '　'
			}
			$("#tags").append(html)
			
			
			html = '<p>' + data.created_at.toString() + '</p>'
			$("#created_at").append(html)

			html = '<p>' + data.content.toString() + '</p>'
			$("#content").append(html)
		}
	})
}