function ajax_get_category(categoryCode, depth)
{
	var selectName = '#Category0' + (depth + 1).toString()

	$(selectName).empty()

	url = "/getSmartstoreCategory/" + categoryCode.toString() + "/" + depth.toString() + "/"
	
	$.ajax({
		url : url,
		
		success:function(data){
			if (Object.keys(data.data).length > 1)
			{
				for(key in data.data)
				{
					var option = $("<option value='" + data.data[key].code.toString() + "'>" + data.data[key].keyword.toString() + "</option>");
					$(selectName).append(option);
				}
				$(selectName).attr("disabled", false);
			}
			else 
			{
				$(selectName).attr("disabled", true);
			}
		}
	})
}