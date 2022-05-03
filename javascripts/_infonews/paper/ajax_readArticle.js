function ajax_readArticle(requestUUID)
{
	url = "/get_read_article_readArticle_paper/?requestUUID=" + requestUUID
	
	$.ajax({
		url : url,
		success:function(data){
			
			// 버튼
			html = ""
			fulltextURL = data.FulltextURL.toString()
			if (!isEmpty(fulltextURL)) 
			{
				html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-danger" onclick="window.open(\'' + data.FulltextURL.toString() + '\')"><i class="fa fa-file"></i> 원문 보기</button>'
			}
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-primary" onclick="window.open(\'' + data.ContentURL.toString() + '\')"><i class="fa fa-pencil"></i> 상세 링크</button>'
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-success" onclick="location.href=\'/paper/\'">목록으로</button>'
			$("#inputButtons").append(html)
			
			
			// 제목
			title = data.Title.toString()
			html = "<p style='font-size:medium'><b>" + title + "</b></p>"
			$("#inputTitle").append(html)
			

			// 저자
			author = data.Author.toString()
			if (!isEmpty(author))	{
				html = "<p style='font-size:small'>" + author + "</p>"
				$("#inputAuthor").append(html)
			}

			changeTitle(title + " - " + author)		// 메타 태그: 타이틀 변경


			// 저널명 + 권, 호, 페이지
			journalName = data.JournalName.toString()
			if (!isEmpty(journalName))	{ 
				html = "<p style='font-size:small'>" + journalName
				$("#div_inputJournalName").show()
			}
			
			VolNo1 = data.VolNo1.toString()
			if (!isEmpty(VolNo1))	{ 	html += "　" + VolNo1 + "권"; }
			
			VolNo2 = data.VolNo2.toString()
			if (!isEmpty(VolNo2)) { 	html += " " + VolNo2 + "호"; }
			
			pageInfo = data.PageInfo.toString()
			if (!isEmpty(pageInfo)) { 	html += " " + pageInfo; }
			html += "</p>"
			$("#inputJournalName").append(html)


			// 출판사(발행기관) + 학위논문
			
			if (!isEmpty(data.Publisher)) {
				html = "<p style='font-size:small'>" + data.Publisher.toString()
							
				degree = data.Degree.toString()
				if (!isEmpty(degree)) { html += " " + degree + "논문"; }
				html += "</p>"
				$("#inputPublisher").append(html)
			}
			

			// 발행년
			if (!isEmpty(data.Pubyear)) {
				html = "<p style='font-size:small'>" + data.Pubyear.toString() + "</p>"
				$("#inputPubYear").append(html)			
			}				
			
			
			// 초록
			inputAbstract = data.Abstract.toString()
			if (!isEmpty(inputAbstract)) 	{ 
				html = "<p style='font-size:small'>" + inputAbstract + "</p>"
				$("#inputAbstract").append(html)
				$("#div_inputAbstract").show()
			}
			
			// 키워드
			keywords = data.Keyword.toString()
			if (!isEmpty(keywords)) 	{ 
				html = "<p style='font-size:small'>" + keywords + "</p>"
				$("#inputKeyword").append(html)
				$("#div_inputKeyword").show()
			}
		}
	})
}