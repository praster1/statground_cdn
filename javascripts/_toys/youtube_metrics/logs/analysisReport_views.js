function analysisReport_views(inputData)
{
	$("#div_views").html("")

	html = ""
	html += '<ul class="simple-post-list">'
	html += '<li>'
	html += '<code style="color:midnightblue; font-size:medium;">'
	html += '<b>가장 많은 조회 수</b>'
	html += '</code>'
	html += '<div class="post-image">'
	html += '<div class="img-thumbnail">'
	html += '<a href="https://www.youtube.com/watch?v=' + inputData.data.views_max.video_id.toString() +'" target="_blank">'
	html += '<img src="' + inputData.data.views_max.thumbnail_url.toString() +'" alt="" width="100%">'
	html += '</a>'
	html += '</div>'
	html += '</div>'
	html += '<div class="post-info">'
	html += '<a href="https://www.youtube.com/watch?v=' + inputData.data.views_max.video_id.toString() +'" target="_blank"><span style="color:black">'
	html += '<b>' + inputData.data.views_max.title.toString() + '</b>'
	html += '</span></a>'
	html += '<div class="post-meta">'
	html += '<code style="color:blue; font-size:small;">'
	html += '<b>' + inputData.data.views_max.publish_date.toString() + '</b>'
	html += '</code>　'
	html += '<code style="color:SeaGreen; font-size:small;">'
	html += '<b>' + numberWithCommas(Math.round(inputData.data.views_max.views)) + '회</b>'
	html += '</code>　'
	html += '<code style="color:MidnightBlue; font-size:small;">'
	html += '<b>' + numberWithCommas(Math.round(inputData.data.views_max.length)) + '초</b>'
	html += '</code>　'
	html += '</div>'
	html += '</div>'
	html += '</li>'
	
	html += '<li>'
	html += '<code style="color:midnightblue; font-size:medium;">'
	html += '<b>가장 적은 조회 수</b>'
	html += '</code>'
	html += '<div class="post-image">'
	html += '<div class="img-thumbnail">'
	html += '<a href="https://www.youtube.com/watch?v=' + inputData.data.views_min.video_id.toString() +'" target="_blank">'
	html += '<img src="' + inputData.data.views_min.thumbnail_url.toString() +'" alt="" width="100%">'
	html += '</a>'
	html += '</div>'
	html += '</div>'
	html += '<div class="post-info">'
	html += '<a href="https://www.youtube.com/watch?v=' + inputData.data.views_min.video_id.toString() +'" target="_blank"><span style="color:black">'
	html += '<b>' + inputData.data.views_min.title.toString() + '</b>'
	html += '</span></a>'
	html += '<div class="post-meta">'
	html += '<code style="color:blue; font-size:small;">'
	html += '<b>' + inputData.data.views_min.publish_date.toString() + '</b>'
	html += '</code>　'
	html += '<code style="color:SeaGreen; font-size:small;">'
	html += '<b>' + numberWithCommas(Math.round(inputData.data.views_min.views)) + '회</b>'
	html += '</code>　'
	html += '<code style="color:MidnightBlue; font-size:small;">'
	html += '<b>' + numberWithCommas(Math.round(inputData.data.views_min.length)) + '초</b>'
	html += '</code>　'
	html += '</div>'
	html += '</div>'
	html += '</li>'
	
	html += '</ul>'
	
	$("#div_views").append(html)	
}