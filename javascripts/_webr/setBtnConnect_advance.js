function setBtnConnect_advance()
{
	var url = "/get_webr_user_info/"

	$.ajax({
		url : url,
		success:function(data){
			console.log(data)
			
			colorTag = "primary"
			if (data.groupInfo.groupID == 2)
			{
				rejectMsg = "<span style='color:black;'><b>Web-R 정회원 이상만 가능합니다.</b></span>"
				replaceBtn_reject("btnConnect01", colorTag, rejectMsg)
				replaceBtn_reject("btnConnect02", colorTag, rejectMsg)
				replaceBtn_reject("btnConnect03", colorTag, rejectMsg)
				replaceBtn_reject("btnConnect04", colorTag, rejectMsg)
				replaceBtn_reject("btnConnect05", colorTag, rejectMsg)
				replaceBtn_reject("btnConnect06", colorTag, rejectMsg)
			}
			else
			{
				replaceBtn("btnConnect01", colorTag, "9e4831b0-f0a8-11ec-8ea0-0242ac120002")
				replaceBtn("btnConnect02", colorTag, "9e483296-f0a8-11ec-8ea0-0242ac120002")
				replaceBtn("btnConnect03", colorTag, "9e483372-f0a8-11ec-8ea0-0242ac120002")
				replaceBtn("btnConnect04", colorTag, "9e483458-f0a8-11ec-8ea0-0242ac120002")
				replaceBtn("btnConnect05", colorTag, "9e4836b0-f0a8-11ec-8ea0-0242ac120002")
				replaceBtn("btnConnect06", colorTag, "9e4837b4-f0a8-11ec-8ea0-0242ac120002")
			}
		}
	})
}