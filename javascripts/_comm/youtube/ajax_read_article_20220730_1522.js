function ajax_read_article(inputUUID)
{
	url = "/youtube/get_youtube_recently_post/?inputLimit=1&inputType=selectVideo&inputUUID=" + inputUUID
	
	$.ajax({
		url : url,
		success:function(data){
			title = data.title.toString()
			changeTitle(title)
		
			html = '<center>'
			html += '<a href="' + data.url.toString() + '" target="_blank">'
			html += '<img src="' + data.url_thumbnail.toString() + '" class="rounded img-responsive">'
			html += '</a>'
			html += '</center>'
			html += '<div class="thumb-info-title">'
			html += '<span class="thumb-info-inner">' + title + '</span>'
			html += '<span class="thumb-info-type">' + data.author.toString() + '</span>'
			html += '</div>'
			$("#div_title").append(html)
		
		
			html = '<li class="completed" style="color:black">Views: ' + data.views.toString() + '</li>'
			html += '<li class="completed" style="color:black">Rating: ' + data.rating.toString() + '</li>'
			html += '<li class="completed" style="color:black">Length: ' + data.length.toString() + 'secs</li>'
			html += '<li class="completed" style="color:black">Publish Date: ' + data.publish_date.toString() + '</li>'
			$("#div_list").append(html)
		
			
			var desc = data.desc
			if (desc != "None")
			{
				$("#div_description").append(desc)
				$("#sub_desc").show()
			}
		}
	})
}