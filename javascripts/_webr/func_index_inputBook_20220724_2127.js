function func_index_inputBook() {
	console.log("book")
	var url = "/get_webr_index_book/?videoCount=1"
	
	$.ajax({
		url : url,
		success:function(data){
			
			for(key in data){
				$("#index_book").html("")
				
				html = '<center>'
				
				html += '<a class="thumb-image" href="' + data[key].link + '" target="_blank">'
				html += '<img src="' + data[key].image + '" class="img-responsive" alt="' + textLengthOverCut(data[key].title, 15) + '">'
				html += '</a>'
				
				html += '<h5 class="mg-title text-semibold" style="color:black;">' + data[key].title + '</h5>'
				html += '</center>'
				
				html += '<div class="mg-description">'
				html += '<p>' + textLengthOverCut(data[key].description.toString(), 85) + '</p>'
				html += '</div>'
				
				$("#index_book").append(html)
			}
		}
	})
}