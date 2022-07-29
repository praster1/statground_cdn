function ajax_get_category(categoryCode, depth)
{
	var selectName = '#Category0' + (depth + 1).toString()

	$(selectName).empty()

	url = "/smartstore/getSmartstoreCategory/" + categoryCode.toString() + "/" + depth.toString() + "/"
	
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
				
				if (depth != 0)	{	$(selectName).val("00000000");	}
			}
			else 
			{
				$(selectName).attr("disabled", true);
			}
		}
	})
}