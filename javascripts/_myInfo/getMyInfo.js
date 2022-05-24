function getMyInfo() {
	$.ajax({
		url : "/get_user_info/",
		success:function(data){		
			console.log(data)
			// 플랜
			$("#myInfo_plan").html("")
			
			html = data.group_info.group_name.toString() + " 계정입니다."
			$("#myInfo_plan").append(html)


			// 만료일
			$("#myInfo_expireddate").html("")
			
			if (data.expired_at.toString() == "None")	{	html = "영구 적용";	}
			else													{	html = data.expired_at.toString()		}
			$("#myInfo_expireddate").append(html)


			// 인증 여부
			if (data.groupUUID.toString() != "961f0790-d788-11ec-9d64-0242ac120002") {
				$("#myInfo_authorized").show()
			} else {
				$("#myInfo_nonauthorized").show()
			}
			

			// 셀 사용량
			$("#myInfo_limitcellsize").html("")
			html = setUserCellUsage(data) 
			$("#myInfo_limitcellsize").append(html)


			// 파일 저장 용량
			$("#myInfo_limitfilesize").html("")
			html = setUserFileStorage(data) 
			$("#myInfo_limitfilesize").append(html)
		}
	})
}