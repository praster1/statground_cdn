function replaceBtn(idName, colorTag, connectURL)
{
	$("#" + idName).html("")
	
	html = '<button class="mb-xs mt-xs mr-xs btn btn-' + colorTag + '" onclick="window.open(\'/webr/connection/' + connectURL + '\', \'_blank\')">'
	html += '<span style="color:white">접속하기</span>'
	html += '</button>'
	$("#" + idName).html(html)		
}