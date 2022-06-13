function buttonLogin()
{
	var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
	 
	// 이메일 공백 확인
	if ($("#email").val() == "")			{	alert("이메일을 입력해주세요.");	$("#email").focus();	return false;	}

	// 이메일 유효성 검사
	else if (!getMail.test($("#email").val()))	{	alert("이메일형식에 맞게 입력해주세요");	$("#email").focus();	return false;	}

	// 비밀번호 공백 확인
	else if ($("#password").val() == "")			{	alert("비밀번호를 입력해주세요.");	$("#password").focus();	return false;	}

	// 비밀번호 유효성 검사
	else if ($("#password").val().length < 8)	{	alert("비밀번호는 8글자 이상 입력해주세요.");	$("#password").focus();	return false;	 }

	else 
	{
		document.getElementById('signInForm').submit();
	}
}