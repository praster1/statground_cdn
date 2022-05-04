function setUserInfo_data_upload() 
{
	$.ajax({
		url : "/get_user_info/",
		success:function(data){
			// 파일 저장 용량
			$("#userinfo_limitfilesize_data_upload").html("")
			html = setUserFileStorage(data) 
			$("#userinfo_limitfilesize_data_upload").append(html)
			//$(".trigger_divPreviewData").hide()
			//$("#divPreviewTable").show()
		}
	})
}