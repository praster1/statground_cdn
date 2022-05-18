function ajax_readArticle(requestUUID)
{
	url = "/get_read_article_readArticle_report/?requestUUID=" + requestUUID
	
	$.ajax({
		url : url,
		success:function(data){
			
			// 버튼
			html = ""
			fulltextURL = data.FulltextURL
			if (!isEmpty(fulltextURL))
			{
				html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-danger" onclick="window.open(\'' + data.FulltextURL.toString() + '\')"><i class="fa fa-file"></i> 원문 보기</button>'
			}
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-primary" onclick="window.open(\'' + data.ContentURL.toString() + '\')"><i class="fa fa-pencil"></i> 상세 링크</button>'
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-success" onclick="location.href=\'/report/\'">목록으로</button>'
			$("#inputButtons").append(html)
			
			
			// 제목
			title = data.Title.toString()
			html = "<p style='font-size:medium'><b>" + title + "</b></p>"
			$("#inputTitle").append(html)
			

			// 저자
			author = data.Author.toString()
			html = "<p style='font-size:small'>" + author + "</p>"
			$("#inputAuthor").append(html)

			changeTitle(title + " - " + author)		// 메타 태그: 타이틀 변경


			// 발행 기관
			html = "<p style='font-size:small'>" + data.Publisher.toString() + "</p>"
			$("#inputPublisher").append(html)
			

			// 발행년
			html = "<p style='font-size:small'>" + data.Pubyear.toString() + "</p>"
			$("#inputPubYear").append(html)				
			
			
			// 초록
			inputAbstract = data.Abstract
			if (!isEmpty(inputAbstract)) 	{ 
				html = "<p style='font-size:small'>" + inputAbstract.toString() + "</p>"
				$("#inputAbstract").append(html)
				$("#div_inputAbstract").show()
			}
			
			// 키워드
			keywords = data.Keyword
			if (!isEmpty(keywords)) 	{ 
				html = "<p style='font-size:small'>" + keywords.toString() + "</p>"
				$("#inputKeyword").append(html)
				$("#div_inputKeyword").show()
			}
		}
	})
}