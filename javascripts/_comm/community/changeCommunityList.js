function changeCommunityList(inputUserid, inputUsername)
{
	if (inputUsername == "Jaimie Kwon") {
		$('#columnistProfile').show()
		$('#columnistProfile_moon').hide();	$('#columnistProfile_kwon').show();		$('#columnistProfile_kim').hide();
		$('#columnistProfile_issac').hide();		$('#columnistProfile_hwang').hide();	$('#columnistProfile_huh').hide();
	} else if (inputUsername == "Issac Lee") {
		$('#columnistProfile').show()
		$('#columnistProfile_moon').hide();	$('#columnistProfile_kwon').hide();		$('#columnistProfile_kim').hide();
		$('#columnistProfile_issac').show();		$('#columnistProfile_hwang').hide();	$('#columnistProfile_huh').hide();
	} else if (inputUsername == "문건웅") {
		$('#columnistProfile').show()
		$('#columnistProfile_moon').show();	$('#columnistProfile_kwon').hide();		$('#columnistProfile_kim').hide();
		$('#columnistProfile_issac').hide();		$('#columnistProfile_hwang').hide();	$('#columnistProfile_huh').hide();
	} else if (inputUsername == "황승식") {
		$('#columnistProfile').show()
		$('#columnistProfile_moon').hide();	$('#columnistProfile_kwon').hide();		$('#columnistProfile_kim').hide();
		$('#columnistProfile_issac').hide();		$('#columnistProfile_hwang').show();	$('#columnistProfile_huh').hide();
	} else if (inputUsername == "허명회") {
		$('#columnistProfile').show()
		$('#columnistProfile_moon').hide();	$('#columnistProfile_kwon').hide();		$('#columnistProfile_kim').hide();
		$('#columnistProfile_issac').hide();		$('#columnistProfile_hwang').hide();	$('#columnistProfile_huh').show();		
	} else if (inputUsername == "Jae-kwang Kim") {
		$('#columnistProfile').show()
		$('#columnistProfile_moon').hide();	$('#columnistProfile_kwon').hide();		$('#columnistProfile_kim').show();
		$('#columnistProfile_issac').hide();		$('#columnistProfile_hwang').hide();	$('#columnistProfile_huh').hide();
	} else  {
		$('#columnistProfile').hide()
		$('#columnistProfile_moon').hide();	$('#columnistProfile_kwon').hide();		$('#columnistProfile_kim').hide();
		$('#columnistProfile_issac').hide();		$('#columnistProfile_hwang').hide();	$('#columnistProfile_huh').hide();
	}
	var table = $('#table_community').DataTable()
	table.clear()
	printTableCommunity(inputUserid, inputUsername)
};