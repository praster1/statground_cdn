function ajax_get_file_extension_all()
{
	$.ajax({
		url : "/get_file_extension_all/",
		
		success:function(data){
			for(key in data)
			{
				var option = $("<option value='" + data[key].uuid.toString() + "'>" + data[key].content.toString() + "</option>");
				$('#linkExtension').append(option);

			}			
			//$("#divPreviewTable").append(html)

		}
	})
}