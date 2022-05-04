function func_writeDataInfo(){
	$(".trigger_write_data_info").show()
	$('#btn_submit_writeDataInfo').attr('disabled', true);
	$('#btn_submit_dataOpen').attr('disabled', true);
	
	var form = document.formSubmit_writeDataInfo;
	form.submit();
}