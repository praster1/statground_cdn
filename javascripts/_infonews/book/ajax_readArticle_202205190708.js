function ajax_readArticle(requestUUID)
{
	url = "/get_read_article_readArticle_book/?requestUUID=" + requestUUID

	$.ajax({
		url : url,
		success:function(data){
			
			// 버튼
			html = ""
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-primary" onclick="window.open(\'' + data.link.toString() + '\')"><i class="fa fa-book"></i> 상세 링크</button>'
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-success" onclick="location.href=\'/book/\'">목록으로</button>'
			$("#inputButtons").append(html)
			

			// 이미지
			imageURL = data.image
			title = data.title.toString()
			if (!isEmpty(imageURL)) 
			{
				html = "<img src='" + imageURL.toString() + "' width='100%' alt='" + title + "' onerror='hideImage();'>"
				$("#inputImage").append(html)

			}
			
			// 제목
			html = "<p style='font-size:medium'><b>" + title + "</b></p>"
			$("#inputTitle").append(html)
			$("#inputTitle2").append(html)
			

			// 저자
			author = data.author.toString()
			html = "<p style='font-size:small'>" + author + "</p>"
			$("#inputAuthor").append(html)

			changeTitle(title + " - " + author)		// 메타 태그: 타이틀 변경
			
			
			// 출판사
			html = "<p style='font-size:small'>" + data.publisher.toString() + "</p>"
			$("#inputPublisher").append(html)
			
			// 출간일
			html = "<p style='font-size:small'>" + data.pubdate.toString() + "</p>"
			$("#inputPubDate").append(html)
			
			
			// 초록
			description = data.description
			if (!isEmpty(description))	{ 
				html = "<p style='font-size:small'>" + description.toString() + "</p>"
				$("#inputDescription").append(html)
				$("#div_inputDescription").show()
			}
		}
	})
}
