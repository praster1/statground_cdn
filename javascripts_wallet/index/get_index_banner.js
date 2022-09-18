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
				
				html += '<img loading="lazy" decoding="async" src="' + data[key].imageLink.toString() + '" alt="Banner" class="w-100">'
				html += '</a>'
				
				$("#index_banner_image").append(html)

				// 타이틀
				$("#index_banner_title").append(data[key].title.toString().replace(" - ", "<br/>"))
			}
		}
	})
}