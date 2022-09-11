function ajax_modification_category(requestUUID)
{
	$.ajax({
		url : "/data_copyright_info/get_copyright_info_category_readArticle/?requestUUID=" + requestUUID,
		success:function(data){
			$("#name").val(data.name.toString())
			
			$("#tag_name_pros").val(data.tag_name_pros.toString())
			
			$("#tag_name_cons").val(data.tag_name_cons.toString())
			
			$("#id_content").val(data.description.toString())
		}
	})
}