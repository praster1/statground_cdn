function ajax_dataInfo(requestUUID, subRequestUUID)
{
	$("#divPreviewTable").hide()
	$(".div_data_generate_warning").hide();
	$(".trigger_danger_previewTable").hide();
	$(".trigger_data_generate_link").hide();
	
	url = "/get_data_info/?requestUUID=" + requestUUID + "&subRequestUUID=" + subRequestUUID

	$.ajax({
		url : url,
		success:function(data){
			$('#requestUUID').val(data.fileUUID)
		
		
			$("#div_inputTitle").show()
			
			// 제목
			title = data.title.toString()
			html = "<p style='font-size:medium'><b>" + title + "</b></p>"
			$("#inputTitle").append(html)
			changeTitle(title)		// 메타 태그: 타이틀 변경
			
		
			// 업데이트 주기
			for(key in data.file_update_cycle)
			{
				html = "<p>" + data.file_update_cycle[key].content.toString() + "</p>"
				$("#inputUpdateCycle").append(html)
			}
			
			
			$("#div_inputCategory").show()
			
			// 분류
			for(key in data.file_category)
			{
				html = "<p>" + data.file_category[key].content.toString() + "</p>"
				$("#inputCategory").append(html)
			}
			
			// 제공자
			for(key in data.file_giver)
			{
				html = "<p>" + data.file_giver[key].content.toString() + "</p>"
				$("#inputGiver").append(html)
			}
		
			// 링크
			if (data.reference_link != null)
			{
				html = "<p><a href=" + data.reference_link.toString() + " target='_blank'><u>바로가기</u></a></p>"
				$("#inputLink").append(html)
			}
			
			
			
			
			$("#div_inputCreatedAt").show()
			
			// 데이터 생성일
			html = "<p>" + data.data_created_at.toString() + "</p>"
			$("#inputDataCreatedAt").append(html)
			
			
			// 최종 업데이트일
			html = "<p>" + data.data_updated_at.toString() + "</p>"
			$("#inputDataUpdatedAt").append(html)
			
			
			
			// 설명
			if (data.description != null)
			{
				$("#div_inputDescription").show()
				description = data.description.toString()
				html = "<p>" + description + "</p>"
				$("#id_content").append(html)
			}

			
			
			// 분류
			html = ""
		
			for(key in data.file_copyright)
			{
				html += "<p>"
				html += "<b>" + data.file_copyright[key].content.toString() + "</b>　"
				html += "(<a href='" + data.file_copyright[key].reference_link.toString() + "' target='_blank'>자세히 보기</a>)"
				html += "</p>"
			}
			
			for(key in data.copyrightCategory)
			{
				html += '<code style="color:' + data.copyrightCategory[key].color.toString() + '"; font-size:small;">'
				html += '<b>' + data.copyrightCategory[key].tag.toString() + '</b>'
				html += '</code>'
				html += '　'
			}
			$("#copyrightTags").append(html)
			$("#div_copyrightTags").show()
			
			console.log(data)
			if (data.nonCommercial == 0)
			{
				$("#div_nonCommercial").show()
			}
			
			
			
			
			
			// 데이터 미리보기
			html = data.data.head.toString()
			$("#divPreviewTable").append(html)
			
			html = "<p>" + data.data.rows.toString() + "</p>"
			$("#previewTable_rowCount").append(html)
			
			html = "<p>" + data.data.cols.toString() + "</p>"
			$("#previewTable_colCount").append(html)
			
			html = "<p><b>" + data.data.cells.toString() + "</b></p>"
			$("#previewTable_cellCount").append(html)
			
			$(".trigger_divPreviewData").hide()
			$("#divPreviewTable").show()
			
			$('#btn_submit_writeDataInfo').attr('disabled', false);		// data_upload의 데이터 정보 제출 버튼
			$('#btn_data_generate').attr('disabled', false);				// data_list의 링크 생성 버튼				
			
		},
		
		error: function(error) {
			$(".trigger_danger").show();
			$(".div_data_generate_warning").show();
			$(".trigger_danger_previewTable").hide();
			
			$(".trigger_divPreviewData").hide();
		}
	})
}