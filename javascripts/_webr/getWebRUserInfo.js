function getWebRUserInfo()
{		
	var url = "/get_webr_user_info/"

	$.ajax({
		url : url,
		success:function(data){
			html = "<p style='color:black;'>"
			html += "<b>닉네임</b>: " + data.nick_name.toString() + "<br/>"
			html += "<b>회원 등급</b>: " + data.groupInfo.groupName.toString() + "<br/>"
			html += "<b>가입 일자</b>: " + data.regdate.toString() + "<br/>"
			html += "</p>"
			$("#WebR_userInfo").append(html)
			$("#WebR_userInfo_loader").hide()
		}
	})
};