function ajax_userInfo()
{
	$.ajax({
		url : "/get_user_info/",
		success:function(data){				
			myPlan = data.group_info.group_name.toString()
			if (myPlan == "Not Authorized") {
				$('#btn_Basic').attr('disabled', true);
				$('#btn_Standard').attr('disabled', true);
				$('#btn_Premium').attr('disabled', true);
				$('#btn_Basic').val('이메일 미인증');
				$('#btn_Standard').val('이메일 미인증');
				$('#btn_Premium').val('이메일 미인증');
				
				$('#months_basic').attr('disabled', true);
				$('#months_standard').attr('disabled', true);
				$('#months_premium').attr('disabled', true);
			}
			else if (myPlan == "Free")
			{
				$('#div_ribbon_Free').show()
			}
			else if (myPlan == "Basic")
			{
				$('#btn_Basic').val('연장하기');
				$('#btn_Standard').val('업그레이드');
				$('#btn_Premium').val('업그레이드');
				
				$('#months_standard').attr('disabled', true);
				$('#months_premium').attr('disabled', true);
				
				$('#div_ribbon_Basic').show()
			}
			else if (myPlan == "Standard")
			{
				$('#btn_Basic').attr('disabled', true);
				$('#btn_Basic').val('낮은 플랜');
				$('#btn_Standard').val('연장하기');
				$('#btn_Premium').val('업그레이드');
				
				$('#months_basic').attr('disabled', true);
				$('#months_premium').attr('disabled', true);
				
				$('#div_ribbon_Standard').show()
			}
			else if (myPlan == "Premium")
			{
				$('#btn_Basic').attr('disabled', true);
				$('#btn_Standard').attr('disabled', true);
				$('#btn_Basic').val('낮은 플랜');
				$('#btn_Standard').val('낮은 플랜');
				$('#btn_Premium').val('연장하기');
				
				$('#months_basic').attr('disabled', true);
				$('#months_standard').attr('disabled', true);
				
				$('#div_ribbon_Premium').show()
			}
			else if (myPlan == "Beta")
			{
				$('#btn_Basic').attr('disabled', true);
				$('#btn_Basic').val('낮은 플랜');
				$('#btn_Standard').val('업그레이드');
				$('#btn_Premium').val('업그레이드');
				
				$('#months_basic').attr('disabled', true);
				
				$('#div_ribbon_Beta').show()
			}
			else
			{
				$('#btn_Basic').attr('disabled', true);
				$('#btn_Standard').attr('disabled', true);
				$('#btn_Premium').attr('disabled', true);
				$('#btn_Basic').val('낮은 플랜');
				$('#btn_Standard').val('낮은 플랜');
				$('#btn_Premium').val('낮은 플랜');
				
				$('#months_basic').attr('disabled', true);
				$('#months_standard').attr('disabled', true);
				$('#months_premium').attr('disabled', true);
			}
		}
	})
}