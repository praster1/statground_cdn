<script>
	function linkGeneration(requestUUID, subRequestUUID) {
		$(".trigger_data_generate_link").show();
		$('#btn_data_generate').attr('disabled', true);
		
		url = ""
		if (subRequestUUID == null)
		{
			url = "/get_link_generation/" + requestUUID + "/?linkExtension=" + $("#linkExtension").val()
		}
		else
		{
			url = "/get_link_generation/" + requestUUID + ";" + subRequestUUID + "/?linkExtension=" + $("#linkExtension").val()
		}
		
		$.ajax({
			url : url,
			success:function(data){
				// 제목
				html = "<br/>"
				html += '<a onclick="copyToClipboard(\'' + data.shortURL.toString() + '\')" class="target">'
				html += "<p style='font-size:medium; color:blue;'>" + data.shortURL.toString() + "</p>"
				html += "</a>"
				$("#div_data_generate_link").append(html)
				
				$(".trigger_data_generate_link").hide();
			}
		})
	}
</script>	