function ajax_infonews_book()
{
	$("#chart_dataUsage").hide()
	
	$.ajax({
		url : "/infonews/get_infonews_book/",
		success:function(data){
			for(key in data){
				html = ''
				html += '<div class="col-md-12 col-lg-3">'
				html += '<div class="info" id="book' + data[key].counter.toString() + '">'
				
				html += '<center>'
				
				html += '<a href="' + data[key].link.toString() + '" target="_blank">'
				
				html += '<img src="' + data[key].image.toString() + '" width="35%" alt="' + data[key].title.toString() + '">'
				
				
				html += '<p>'
				
				html += '<span style="color:black;"><b>' + data[key].title.toString() + '</b></span><br/>'
				html += '<span style="color:black;">' + data[key].author.toString() + '</center>'
				html += '</center>'
				
				html += '</a>'
				
				html += '</p>'
				html += '</div>'
				html += '</div>'
				
				$("#div_book").append(html)
			}
		}
	})
}