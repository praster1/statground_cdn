function linkUserAuthorization() {
	$(".trigger_myInfo_emailSend").show();
	$('#btn_linkUserAuthorization').attr('disabled', true);
	
	$.ajax({
		url : "/myInfo/get_user_link_user_authorization/",
		success:function(data){
			if (data.loginChecker == 1) {
				$(".trigger_myInfo_emailSendComplete1").show();
			} else if (data.loginChecker == 2) {
				$(".trigger_myInfo_emailSendComplete2").show();
			} else if (data.loginChecker == 3) {
				$(".trigger_myInfo_emailSendComplete3").show();
			}
			
			$(".trigger_myInfo_emailSend").hide();
		}
	})
}