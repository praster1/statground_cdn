function setBtnConnect_free()
{
	var url = "/get_webr_user_info/"

	$.ajax({
		url : url,
		success:function(data){
			console.log(data)
			
			colorTag = "primary"
			replaceBtn("btnConnect01", colorTag, "9e4831b0-f0a8-11ec-8ea0-0242ac120002")
			replaceBtn("btnConnect02", colorTag, "9e483296-f0a8-11ec-8ea0-0242ac120002")
			replaceBtn("btnConnect03", colorTag, "9e483372-f0a8-11ec-8ea0-0242ac120002")
			replaceBtn("btnConnect04", colorTag, "9e483458-f0a8-11ec-8ea0-0242ac120002")
			replaceBtn("btnConnect05", colorTag, "9e4836b0-f0a8-11ec-8ea0-0242ac120002")
			replaceBtn("btnConnect06", colorTag, "9e4837b4-f0a8-11ec-8ea0-0242ac120002")
		}
	})
}