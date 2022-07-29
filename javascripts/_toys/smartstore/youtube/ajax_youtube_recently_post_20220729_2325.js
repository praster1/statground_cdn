function ajax_youtube_recently_post()
{
	$("#youtube_recently_post").hide()

	$.ajax({
		url : "/smartstore/get_toys_smartstore_youtube_recently_post/?inputLimit=1&inputType=recentlyRandom",
		success:function(data){
			html = '<a href="' + data.url.toString() +'" class="account" target="_blank">'
			html += '<img src=' + data.url_thumbnail.toString() +' alt="">'
			html += '</a>'
			$("#youtube_recently_post_thumbnail").append(html)
		
		
			html = '<a href="' + data.url.toString() + '" target="_blank"><h3 class="name text-semibold"><span style="color:white; word-break:keep-all; font-size:large;">' + textLengthOverCut(data.title.toString(), 100, " ...") +'</span></h3></a>'
			html += '<a href="' + data.url_channel.toString() +'" class="account" target="_blank">' + data.author.toString() +'</a>'
			$("#youtube_recently_post_title").append(html)
			
			
			html = '<li><h5 class="stat text-uppercase">조회수</h5><h4 class="count">' + data.views.toString() +'</h4></li>'
			if (data.rating == -1)
			{
				html += '<li><h5 class="stat text-uppercase">평점</h5><h4 class="count">0.0</h4></li>'
			} else {
				html += '<li><h5 class="stat text-uppercase">평점</h5><h4 class="count">' + data.rating.toString() +'</h4></li>'
			}
			
			html += '<li><h5 class="stat text-uppercase">영상 길이</h5><h4 class="count">' + data.length.toString() +'초</h4></li>'
			$("#youtube_recently_post_stats").append(html)
			
			
			html = ''
			if (data.desc.toString() != "None")
			{
				html += '<p><a href="' + data.url.toString() + '" target="_blank"><span style="color:white; word-break:keep-all;">' + textLengthOverCut(data.desc.toString(), 300, " ...") + '</sapn></a></p>'
			}
			html += '<div class="quote-footer" >'
			html += '<a href="' + data.url.toString() + '" target="_blank">'
			html += '<span class="datetime">' + data.publish_date.toString() + '</span>'
			html += '</a>'
			html += '</div>'
			$("#youtube_recently_post_desc").append(html)
			
			
			$(".trigger_youtube_recently_post").hide()
			$("#youtube_recently_post").show()
		}
	})
}