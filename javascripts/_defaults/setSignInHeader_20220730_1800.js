function setSignInHeader() {
	$.ajax({
		url : "/myInfo/get_user_info/",
		success:function(data){		
			$("#userinfo_role").html("")
			
			html = data.group_info.group_name.toString() + " 계정입니다."
			$("#userinfo_role").append(html)


			// 셀 사용량
			$("#userinfo_limitcellsize").html("")
			html = setUserCellUsage(data, "rate") 
			$("#userinfo_limitcellsize").append(html)


			// 파일 저장 용량
			$("#userinfo_limitfilesize").html("")
			html = setUserFileStorage(data, "rate") 
			$("#userinfo_limitfilesize").append(html)
			
			if ("is_admin" in data.group_info || "is_staff" in data.group_info )
			{
				 if (data.group_info.is_admin > 0 || data.group_info.is_staff > 0)
				{
					$("#notification_operation").show()
				}
			}
		}
	})
}