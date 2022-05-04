function ajax_dataInfo(requestUUID)
{
	$("#id_content").hide()

	$.ajax({
		url : "/get_data_info/?requestUUID=" + requestUUID,
		success:function(data){
			html = ''		
		
			// 제목
			if (data.title != null && data.title != "")
			{
				$("#inputTitle").val(data.title.toString())
			}
			
		
			// 분류
			for(key in data.file_category)
			{
				var data_category = {
					id: data.file_category[key].uuid.toString(),
					text: data.file_category[key].content.toString()
				};

				var newOption_category = new Option(data_category.text, data_category.id, false, false);
				$('#inputCategory').append(newOption_category).trigger('change');
			}
			
			// 제공자
			for(key in data.file_giver)
			{
				var data_giver = {
					id: data.file_giver[key].uuid.toString(),
					text: data.file_giver[key].content.toString()
				};

				var newOption_giver = new Option(data_giver.text, data_giver.id, false, false);
				$('#inputGiver').append(newOption_giver).trigger('change');
			}
			
			// 업데이트 주기
			for(key in data.file_update_cycle)
			{
				var data_update_cycle = {
					id: data.file_update_cycle[key].uuid.toString(),
					text: data.file_update_cycle[key].content.toString()
				};

				var newOption_update_cycle = new Option(data_update_cycle.text, data_update_cycle.id, false, false);
				$('#inputUpdateCycle').append(newOption_update_cycle).trigger('change');
			}					
			
			// 저작권
			for(key in data.file_copyright)
			{
				var data_copyright = {
					id: data.file_copyright[key].uuid.toString(),
					text: data.file_copyright[key].content.toString()
				};

				var newOption_copyright = new Option(data_copyright.text, data_copyright.id, false, false);
				$('#inputCopyright').append(newOption_copyright).trigger('change');
			}					
		
			// 링크
			if (data.reference_link != null && data.reference_link != "")
			{
				$("#inputLink").val(data.reference_link.toString())
			}
			
			// 데이터 생성일
			if (data.data_created_at != null && data.data_created_at != "")
			{
				$("#inputDataCreatedAt").val(data.data_created_at.toString())
			}
			
			// 최종 업데이트일
			if (data.data_updated_at != null && data.data_updated_at != "")
			{
				$("#inputDataUpdatedAt").val(data.data_updated_at.toString())
			}
			
			// 설명
			//if (data.description != null && data.description != "")
			//{
			//	$("#id_content").val(data.description.toString())
			//}
			
			//$("#id_content").show()
		}
	})
}