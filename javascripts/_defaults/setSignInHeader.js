function setSignInHeader() {
	$.ajax({
		url : "/get_user_info/",
		success:function(data){				
			$("#userinfo_role").html("")
			
			html = data.userinfo_groupname.toString() + " 계정입니다."
			$("#userinfo_role").append(html)


			// 셀 사용량
			$("#userinfo_limitcellsize").html("")
			html = setUserCellUsage(data, "rate") 
			$("#userinfo_limitcellsize").append(html)


			// 파일 저장 용량
			$("#userinfo_limitfilesize").html("")
			html = setUserFileStorage(data, "rate") 
			$("#userinfo_limitfilesize").append(html)
			
			
			if (data.userinfo_isAdmin == 1 || data.userinfo_isStaff == 1)
			{
				$("#notification_operation").show()
			}				
		}
	})
}