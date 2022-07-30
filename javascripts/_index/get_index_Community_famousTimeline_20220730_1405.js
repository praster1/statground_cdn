function get_index_Community_famousTimeline()
{
	$.ajax({
		url : "/index/get_index_Community_famousTimeline/",
		success:function(data){
			// 멤버 수
			html = '<strong class="amount">' + numberWithCommas(data.memberCount.toString()) + '명</strong>'
			$("#community_memberCount").append(html)
			$("#community_memberCount_loader").hide()
			
			// 타임라인 개수
			html = '<strong class="amount">' + numberWithCommas(data.timelineCount.toString()) + '</strong>'
			html += '<span class="text-primary">(최근 30일)</span>'
			$("#community_timelineCount").append(html)
			$("#community_timelineCount_loader").hide()
		
		
			// 최근 인기 타임라인
			html = '<a href="/community/readArticle/' + data.timeline.post_id.toString() + '">'
			html += '<p style="color:black;">'
			html += textLengthOverCut(data.timeline.text.toString(), 150)
			html += '</p>'
			html += '</a>'
			
			html += '<p class="text-right">'
			html += '<a href="/community/readArticle/' + data.timeline.post_id.toString() + '">'
			html += '<span style="color:gray">(더보기)</span>'
			html += '</a>'
			html += '</p>'
			$("#community_recentlyTimeline").append(html)	
			$("#community_recentlyTimeline_loader").hide()
		}
	})
}