function ajax_read_article(requestUUID)
{
	$.ajax({
		url : "/data_howtouse/get_read_article_how_to_use_readArticle/?requestUUID=" + requestUUID,
		success:function(data){
			// 제목
			title = data.title.toString()
			changeTitle(title)
			html = '<h4 style="color:black"><b>' + title + '</b></h4>'
			$("#title").append(html)
			
			html = '<p>' + data.created_at.toString() + '</p>'
			$("#created_at").append(html)

			html = '<p>' + data.content.toString() + '</p>'
			$("#content").append(html)
		}
	})
}