function printReadArticle(categoryTag, documentID)
{		
	var url = "/get_webr_read_article/"+ documentID + "/"

	$.ajax({
		url : url,
		success:function(data){
			title = data.title.toString()
			$("#input_title").append("<b>" + title + "</b>")		// 제목
			changeTitle(title)
			
			$("#input_writer").append(data.nick_name.toString())		// 작성자
			$("#input_regdate").append(data.regdate.toString())		// 작성 일자
			$("#input_readed_count").append(data.readed_count.toString())		// 조회 수
			
			if (data.comment_count > 0) { $("#div_comment").show();	}
			
			$("#input_content").append(data.content.toString())		// 내용
			
			html = '<button class="mb-xs mt-xs mr-xs btn btn-success" onclick="location.href=\'/webr/' + categoryTag + '\'">목록으로</button>'
			$("#input_btn_list").append(html)		// 내용
		}
	})
};