function func_inputYoutube(channelUUID, inputTitle) {
	$.ajax({
		url : "/get_index_youtube/?uuid=" + channelUUID + "&videoCount=4",
		success:function(data){
		
			for(key in data){
				html = '<div class="isotope-item document col-sm-12 col-md-3 col-lg-3">'
				
				html += '<div class="thumbnail">'
				
				html += '<a class="thumb-image" href="' + data[key].url + '" target="_blank">'
				html += '<img src="' + data[key].url_thumbnail + '" class="img-responsive" alt="' + textLengthOverCut(data[key].title, 15) + '">'
				html += '</a>'
				
				html += '<h5 class="mg-title text-semibold">' + textLengthOverCut(data[key].title, 15) + '</h5>'
				
				html += '<div class="mg-description">'
				html += '<small class="pull-left text-muted">조회수:' + data[key].views + '</small>'
				html += '<small class="pull-right text-muted">' + data[key].publish_date + '</small>'
				
				html += '</div>'
				html += '</div>'
				html += '</div>'
				
				$("#index_youtube").append(html)
			}
			
			$("#index_youtube_title").append(inputTitle)
		}
	})
}