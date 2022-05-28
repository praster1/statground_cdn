function analysisReport_profile(inputData)
{
	$("#profileInfo").html("")
	$("#profileBtn").html("")

	// 프로필 이미지
	thumbnail = inputData.info.details.thumbnails.toString()
	html = '<div class="profile-picture">'
	html += '<img src="' + thumbnail + '">'
	html += '</div>'
	
	title = inputData.info.details.title.toString()
	data_updated_at = inputData.info.data_updated_at.toString()
	html += '<div class="profile-info" id="profile-info" name="profile-info">'
	
	html += '<h4 class="name text-semibold">' + title + '　'
	html += '<code style="color:blue; font-size:small;">'
	html += '<b>기준 시각: </b>' + data_updated_at.substring(0, 19) + ''
	html += '</code>'
	html += '</h4>'
	
	html += '<h5 class="role">동영상 수:　'
	html += '<code style="color:Purple; font-size:small;">'
	html += '<b>' + numberWithCommas(inputData.data.rows) + '개</b>'
	html += '</code>　'
	
	html += '<h5 class="role">조회 수(회):　'
	html += '<code style="color:LightSeaGreen; font-size:small;">'
	html += '<b>최소: ' + numberWithCommas(Math.round(inputData.data.views_min.views)) + '</b>'
	html += '</code>　'
	html += '<code style="color:LightSeaGreen; font-size:small;">'
	html += '<b>1stQu.: ' + numberWithCommas(Math.round(inputData.data.views_quantile25)) + '</b>'
	html += '</code>　'
	html += '<code style="color:SeaGreen; font-size:small;">'
	html += '<b>평균: ' + numberWithCommas(Math.round(inputData.data.views_mean)) + '</b>'
	html += '</code>　'
	html += '<code style="color:SeaGreen; font-size:small;">'
	html += '<b>중앙값: ' + numberWithCommas(Math.round(inputData.data.views_quantile50)) + '</b>'
	html += '</code>　'
	html += '<code style="color:LightSeaGreen; font-size:small;">'
	html += '<b>3stQu.: ' + numberWithCommas(Math.round(inputData.data.views_quantile75)) + '</b>'
	html += '</code>　'
	html += '<code style="color:LightSeaGreen; font-size:small;">'
	html += '<b>최대: ' + numberWithCommas(Math.round(inputData.data.views_max.views)) + '</b>'
	html += '</code>　'
	html += '<code style="color:LightSeaGreen; font-size:small;">'
	html += '<b>표준편차: ' + numberWithCommas(Math.round(inputData.data.views_std)) + '</b>'
	html += '</code>　'
	html += '</h5>'
	
	html += '<h5 class="role">비디오 길이(초):　'
	html += '<code style="color:MediumTurquoise; font-size:small;">'
	html += '<b>최소: ' + numberWithCommas(Math.round(inputData.data.length_min.length)) + '</b>'
	html += '</code>　'
	html += '<code style="color:MediumTurquoise; font-size:small;">'
	html += '<b>1stQu.: ' + numberWithCommas(Math.round(inputData.data.length_quantile25)) + '</b>'
	html += '</code>　'
	html += '<code style="color:MidnightBlue; font-size:small;">'
	html += '<b>평균: ' + numberWithCommas(Math.round(inputData.data.length_mean)) + '</b>'
	html += '</code>　'
	html += '<code style="color:MidnightBlue; font-size:small;">'
	html += '<b>중앙값: ' + numberWithCommas(Math.round(inputData.data.length_quantile50)) + '</b>'
	html += '</code>　'
	html += '<code style="color:MediumTurquoise; font-size:small;">'
	html += '<b>3stQu.: ' + numberWithCommas(Math.round(inputData.data.length_quantile75)) + '</b>'
	html += '</code>　'
	html += '<code style="color:MediumTurquoise; font-size:small;">'
	html += '<b>최대: ' + numberWithCommas(Math.round(inputData.data.length_max.length)) + '</b>'
	html += '</code>　'
	html += '<code style="color:MediumTurquoise; font-size:small;">'
	html += '<b>표준편차: ' + numberWithCommas(Math.round(inputData.data.length_std)) + '</b>'
	html += '</code>　'
	html += '</h5>'
	html += '</div>'
	
	$("#profileInfo").append(html)
	
	
	channelURL = "https://www.youtube.com/channel/" + inputData.info_upload.filename.toString() + "/"
	dataURL = "/data/readDataInfo/youtube_metrics/" + inputData.uuid.toString() + "/"
	html = '<a href="' + channelURL + '" class="btn btn-primary" role="button" target="_blank">'
	html += '<span class="input-group-addon btn-danger"><i class="fa-brands fa-youtube" style="color:white;" aria-hidden="true"></i>　채널 바로가기</span>'
	html += '</a>'
	html += '<a href="' + dataURL +'" class="btn btn-primary" role="button" target="_blank">'
	html += '<span class="input-group-addon btn-success"><i class="fa-solid fa-download" style="color:white;" aria-hidden="true"></i>　데이터 다운로드</span>'
	html += '</a>'
	$("#profileBtn").append(html)
}