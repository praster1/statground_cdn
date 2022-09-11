function ajax_modification_article(requestUUID)
{
	$.ajax({
		url : "/data_howtouse/get_how_to_use_readArticle/?requestUUID=" + requestUUID,
		success:function(data){
			$("#title").val(data.title.toString())
			
			$("#order").val(data.content_order.toString())

			$("#id_content").val(data.content.toString())
		}
	})
}