function requireAnalysis(channelID)
{		
	const target = document.getElementById('btn_' + channelID);
	target.disabled = true;

	var url = "/insert_channel_dataset/"
	
	if (channelID != null)
	{
		url = url + channelID + "/"
	}

	$.ajax({
		url : url,
		success:function(data){
			if (data.result.toString() == "failed") {
				alert("분석 요청에 실패하였습니다. 관리자에게 문의하세요.");
			} else if (data.result.toString() == "exist") {
				alert("1일 이내에 분석 요청이 발생한 채널입니다. '분석 기록'을 확인하세요.");
			} else if (data.result.toString() == "notSignIn") {
				alert("로그인이 필요합니다.");
			} else {
				alert("분석이 요청되었습니다. '분석 기록'을 확인하세요.");
			}
		},
		
		error: function(error) {
			alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
	})
};