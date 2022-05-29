function ajax_readArticle(requestUUID)
{
	url = "/get_read_article_readArticle_patent/?requestUUID=" + requestUUID
	
	$.ajax({
		url : url,
		success:function(data){
			
			// 버튼
			html = ""
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-primary" onclick="window.open(\'' + data.ContentURL.toString() + '\')"><i class="fa-solid fa-lightbulb mr-sm"></i> 상세 링크</button>'
			html += '<button type="button" class="mb-xs mt-xs mr-xs btn btn-success" onclick="location.href=\'/patent/\'">목록으로</button>'
			$("#inputButtons").append(html)
			
			
			// 제목
			title = data.Title.toString()
			html = "<p style='font-size:medium'><b>" + title + "</b></p>"
			$("#inputTitle").append(html)
			

			// 저자
			applicants = data.Applicants.toString()
			html = "<p style='font-size:small'>" + applicants + "</p>"
			$("#inputApplicants").append(html)

			changeTitle(title + " - " + applicants)		// 메타 태그: 타이틀 변경


			// 국가
			html = "<p style='font-size:small'>" + data.NationCode.toString() + "</p>"
			$("#inputNationCode").append(html)


			// 상태
			html = "<p style='font-size:small'>" + data.PatentStatus.toString() + "</p>"
			$("#inputPatentStatus").append(html)


			// 공고번호
			html = "<p style='font-size:small'>" + data.NoticeNumber.toString() + "</p>"
			$("#inputNoticeNumber").append(html)
			
			// 공고일자
			noticeDate = data.NoticeDate
			if (!isEmpty(noticeDate)) 	{ 
				html = "<p style='font-size:small'>" + noticeDate.toString() + "</p>"
				$("#inputNoticeDate").append(html)
				$("#div_inputNoticeDate").show()
			}
			

			// 출원
			applNum = data.ApplNum
			applDate = data.ApplDate
			if (!isEmpty(applNum))
			{ 
				html = "<p style='font-size:small'>" + applNum.toString() + "</p>"
				$("#inputApplNum").append(html)
				
				html = "<p style='font-size:small'>" + applDate.toString() + "</p>"
				$("#inputApplDate").append(html)
				$("#div_inputAppl").show()
			}


			// 공개
			publNum = data.PublNum
			publDate = data.PublDate
			if (!isEmpty(publNum))
			{ 
				html = "<p style='font-size:small'>" + publNum.toString() + "</p>"
				$("#inputPublNum").append(html)
				
				html = "<p style='font-size:small'>" + publDate.toString() + "</p>"
				$("#inputPublDate").append(html)
				$("#div_inputPubl").show()
			}
			
			
			// 등록
			grantNum = data.GrantNum
			grantDate = data.GrantDate
			if (!isEmpty(grantNum))
			{ 
				html = "<p style='font-size:small'>" + grantNum.toString() + "</p>"
				$("#inputGrantNum").append(html)
				
				html = "<p style='font-size:small'>" + grantDate.toString() + "</p>"
				$("#inputGrantDate").append(html)
				$("#div_inputGrant").show()
			}

			inputAbstract = data.Abstract
			if (!isEmpty(inputAbstract)) 	{ 
				html = "<p style='font-size:small'>" + inputAbstract.toString() + "</p>"
				$("#inputAbstract").append(html)
				$("#div_inputAbstract").show()
			}
							
		}
	})
}