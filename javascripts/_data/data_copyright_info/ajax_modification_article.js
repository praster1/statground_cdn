function ajax_modification_article(requestUUID)
{
	$.ajax({
		url : "/data_copyright_info/get_copyright_info_readArticle/?requestUUID=" + requestUUID,
		success:function(data){
			console.log(data)
			$("#title").val(data.title.toString())

			$("#id_content").val(data.content.toString())
			
			
			for(keys in data.printCategory)
			{
				if (data.printCategory[keys].color == "blue")
				{
					$("input:checkbox[id='" + keys + "']").prop("checked", true);
				}
			}
		}
	})
}