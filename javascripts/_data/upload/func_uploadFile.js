function func_uploadFile()
{
	$(".trigger_upload").show()
	$('#btn_submit').attr('disabled', true);
	
	var form = document.form_fileUpload;
	form.submit();
}