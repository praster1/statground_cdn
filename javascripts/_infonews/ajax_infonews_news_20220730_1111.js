function ajax_infonews_news()
{
	$("#chart_dataUsage").hide()

	$.ajax({
		url : "/infonews/get_infonews_news/",
		success:function(data){
			counter = 0
			for(key in data){
				counter += 1
				
				html = ''
				html += '<div class="col-md-12 col-lg-4">'
				html += '<section class="panel">'
				html += '<div class="panel-body">'
				html += '<div class="info" id="news' + data[key].counter.toString() + '">'
				
				
				html += '<p class="drop-caps colored">'
				html += '' + data[key].counter.toString() + ' ' 
				html += '<a href="' + data[key].link.toString() + '" target="_blank">'
				html += '<span style="color:black; word-break: break-all;">' + data[key].title.toString() + '</span>'
				html += '</a>　'

				html += '<code style="color:black; font-size:small;">'
				html += '<b>' + data[key].pubdate.toString().substring(0, 10) + '</b>'
				html += '</code>'
				
				
				html += '</p>'
				
				html += '</div>'
				html += '</div>'
				html += '</section>'
				html += '</div>'
				
				$("#div_news").append(html)
			}
		}
	})
}