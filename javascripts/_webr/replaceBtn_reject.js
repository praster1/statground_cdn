function replaceBtn_reject(idName, colorTag, msg)
{
	$("#" + idName).html("")
	
	html = '<button class="mb-xs mt-xs mr-xs btn btn-' + colorTag + '" disabled>'
	html += '<span style="color:white">' + msg + '</span>'
	html += '</button>'
	$("#" + idName).html(html)		
}