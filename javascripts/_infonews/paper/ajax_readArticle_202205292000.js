function ajax_readArticle(requestUUID)
{
	url = "/get_read_article_readArticle_paper/?requestUUID=" + requestUUID
	
	$.ajax({
		url : url,
		success:function(data){
			
			// 버튼
			html = ""
			fulltextURL = data.FulltextURL
			if (!isEmpty(fulltextURL)) 
			{
				html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-danger" onclick="window.open(\'' + data.FulltextURL.toString() + '\')"><i class="fa-solid fa-file-arrow-down mr-sm"></i> 원문 보기</button>'
			}
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-primary" onclick="window.open(\'' + data.ContentURL.toString() + '\')"><i class="fa-solid fa-scroll mr-sm"></i> 상세 링크</button>'
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-success" onclick="location.href=\'/paper/\'">목록으로</button>'
			$("#inputButtons").append(html)
			
			
			// 제목
			title = data.Title.toString()
			html = "<p style='font-size:medium'><b>" + title + "</b></p>"
			$("#inputTitle").append(html)
			

			// 저자
			author = data.Author
			if (!isEmpty(author))	{
				html = "<p style='font-size:small'>" + author.toString() + "</p>"
				$("#inputAuthor").append(html)
			}

			changeTitle(title + " - " + author)		// 메타 태그: 타이틀 변경


			// 저널명 + 권, 호, 페이지
			journalName = data.JournalName
			if (!isEmpty(journalName))	{ 
				html = "<p style='font-size:small'>" + journalName.toString()
				$("#div_inputJournalName").show()
			}
			
			VolNo1 = data.VolNo1
			if (!isEmpty(VolNo1))	{ 	html += "　" + VolNo1.toString() + "권"; }
			
			VolNo2 = data.VolNo2
			if (!isEmpty(VolNo2)) { 	html += " " + VolNo2.toString() + "호"; }
			
			pageInfo = data.PageInfo
			if (!isEmpty(pageInfo)) { 	html += " " + pageInfo.toString(); }
			html += "</p>"
			$("#inputJournalName").append(html)


			// 출판사(발행기관) + 학위논문
			
			if (!isEmpty(data.Publisher)) {
				html = "<p style='font-size:small'>" + data.Publisher.toString()
							
				degree = data.Degree
				if (!isEmpty(degree)) { html += " " + degree.toString() + "논문"; }
				html += "</p>"
				$("#inputPublisher").append(html)
			}
			

			// 발행년
			if (!isEmpty(data.Pubyear)) {
				html = "<p style='font-size:small'>" + data.Pubyear.toString() + "</p>"
				$("#inputPubYear").append(html)			
			}				
			
			
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