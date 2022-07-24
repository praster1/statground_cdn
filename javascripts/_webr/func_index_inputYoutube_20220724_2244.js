function func_index_inputYoutube(channelUUID) {
	console.log("youtube")
	var url = "/get_webr_index_youtube/?uuid=" + channelUUID + "&videoCount=1"
	
	$.ajax({
		url : url,
		success:function(data){
			for(key in data){
				$("#index_youtube").html("")
				
				html = '<center>'
				html += '<a class="thumb-image" href="' + data[key].url + '" target="_blank">'
				html += '<img src="' + data[key].url_thumbnail + '" class="img-responsive" alt="' + textLengthOverCut(data[key].title, 15) + '">'
				html += '</a>'
				
				html += '<h5 class="mg-title text-semibold" style="color:black;">' + data[key].title + '</h5>'
				html += '</center>'
				
				$("#index_youtube").append(html)
			}
		}
	})
}