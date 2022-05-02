function get_index_banner()
{
	$.ajax({
		url : "/get_index_banner/",
		success:function(data){			

			for(key in data){
				html = ""
		
				// 이미지
				if (data[key].target_blank.toString() == "1") {
					html += '<a href="' + data[key].link.toString() + '" target="_blank">'
				} else {
					html += '<a href="' + data[key].link.toString() + '">'
				}
				
				html += '<img src="' + data[key].imageLink.toString() + '" width="100%" alt="메인화면 배너">'
				html += '</a><br/>'
				
				html += "<br/>"
				
				$("#index_banner").append(html)
			}
		}
	})
}