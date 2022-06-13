function buttonSubmitPassword()
{
	// 비밀번호 공백 확인
	if ($("#password").val() == "")			{	alert("비밀번호를 입력해주세요.");	$("#password").focus();	return false;	}

	// 비밀번호 유효성 검사
	else if ($("#password").val().length < 8)	{	alert("비밀번호는 8글자 이상 입력해주세요.");	$("#password").focus();	return false;	 }

	else 
	{
		$('#signInForm').submit();
	}
}