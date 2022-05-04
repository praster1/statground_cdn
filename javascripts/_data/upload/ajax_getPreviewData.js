function ajax_getPreviewData(requestUUID)
{
	$.ajax({
		url : "/get_preview_data/?requestUUID=" + requestUUID,
		success:function(data){
			if (data.data != null && data.data != "")
			{
				$("#divPreviewTable").append(data.data.toString())
			}
			
			$(".trigger_divPreviewData").hide()
			$('#btn_submit_writeDataInfo').attr('disabled', false);
		},
		error: function(error) {
			$(".trigger_danger_previewTable").hide();				
			$(".trigger_divPreviewData").hide();
		}
	})
}