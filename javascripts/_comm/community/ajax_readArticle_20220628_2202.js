function ajax_readArticle(inputValue)
{
	url = "/get_community_contents_read_article/?inputValue=" + inputValue
	
	$.ajax({
		url : url,
		success:function(data){
			// 페이스북 버튼
			html = '<button type="button" class="mb-xs mt-xs mr-xs btn btn-primary" '
			html += 'onclick="window.open(\'https://www.facebook.com/groups/' + data.group_id.toString() + '/posts/' + data.post_id.toString() + '\')">'
			html += '<i class="fa-brands fa-facebook mt-xs"></i>&nbsp;&nbsp;페이스북에서 보기</button>'
			
			// 목록 버튼
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-success" onclick="location.href=\'/community/\'">목록으로</button>'
			$("#inputButtons").append(html)
			
			
			// 제목
			title = data.title.toString()
			html = "<p style='font-size:medium'><b>" + title + "</b></p>"
			$("#inputTitle").append(html)
			changeTitle(title)		// 메타 태그: 타이틀 변경


			// 작성자
			html = "<p style='font-size:small'>" + data.username.toString() + "</p>"
			$("#inputUsername").append(html)
			
			// 작성 시각
			html = "<p style='font-size:small'>" + data.timestamp.toString() + "</p>"
			$("#inputTime").append(html)
			

			// Likes
			html = ""
			if (isEmpty(data.likes)) {
				html += "<i class='fa fa-thumbs-up'></i> 좋아요 0　"
			} else {
				html += "<b style='color:DarkCyan'><i class='fa fa-thumbs-up'></i> 좋아요 " + data.likes.toString() + "</b>　"
			}
			
			if (isEmpty(data.reaction_count)) {
				html += "<i class='fa fa-heart'></i> 반응 0　"
			} else {
				html += "<b style='color:DarkRed'><i class='fa fa-heart'></i> 반응 " + data.reaction_count.toString() + "</b>　"
			}
			
			if (isEmpty(data.comments)) {
				html += "<i class='fa fa-comments'></i> 댓글 0　"
			} else {
				html += "<b style='color:DarkGoldenRod'><i class='fa fa-comments'></i> 댓글 " + data.comments.toString() + "</b>　"
			}
			
			if (isEmpty(data.shares)) {
				html += "<i class='fa fa-share-alt'></i> 공유 0　"
			} else {
				html += "<b style='color:DarkBlue'><i class='fa fa-share-alt'></i> 공유 " + data.shares.toString() + "</b>　"
			}
			
			$("#inputLike").append(html)
			

			// 첨부 이미지
			imageURL = data.image
			link = data.link
			if (!isEmpty(imageURL))
			{
				html = "<center>"
				html += "<div class='thumbnail'>"
				html += "<div class='thumb-preview'>"
				if (!isEmpty(link))		{	html += "<a href='" + link.toString() + "' class='thumb-image' target='_blank' onerror='this.style.display=\"none\";'>"	}
				html += "<img src='" + imageURL.toString() + "' class='img-responsive' width='75%' alt='" + title + "'>"
				if (!isEmpty(link))		{	html += "</a>"		}
				html += "</div>"
				html += "</div>"
				html += "</center>"
				html += "<br/>"
				$("#inputImage").append(html)
				$("#inputImage").show()
			}

			
			// 내용
			if (!isEmpty(data.post_text)) {
				html = "<p style='font-size:medium'>" + linkify(data.post_text.toString()) + "</p>"
				$("#inputContent").append(html)
			} else if (!isEmpty(data.text)) {
				html = "<p style='font-size:medium'>" + linkify(data.text.toString()) + "</p>"
				$("#inputContent").append(html)
			}  
			
			if (!isEmpty(data.shared_text)) {
				html = "<p style='font-size:small'>" + linkify(data.shared_text.toString()) + "</p>"
				$("#inputShares").append(html)
				$("#divSharedText").show()
			}
		}
	})
}