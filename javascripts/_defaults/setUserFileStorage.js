function setUserFileStorage(data, type="full") 
{
	html = ""

	var uploadedFileSize = data.userinfo_uploadedfilesize.toFixed(3)		// 현재까지 업로드한 파일 크기
	var limitFileSize = data.userinfo_limitfilesize		// 업로드 한계 크기
	
	if (type == "full")
	{
		if (userinfo_limitfilesize > 0)
		{
			limitFileSize = data.userinfo_limitfilesize.toFixed(3)
		}

		if (limitFileSize == 0) {
			html = '<center><p style="color:black;">' + numberWithCommas(uploadedFileSize) + ' MB / 0.00 MB' + '</p></center>'
			
		} else if (limitFileSize == -1) {
			html = '<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">'
			html += '<center><p style="color:black;">' + numberWithCommas(uploadedFileSize) + ' MB / ∞ MB' + '</p></center>'
			html += '</div>'
			
		} else {
			var usageRateFileSize = numberWithCommas((uploadedFileSize / limitFileSize * 100).toFixed(3))
			var usageRateFileSize_rate = numberWithCommas(((uploadedFileSize / limitFileSize * 100)).toFixed(3))
			var usageRateFileSize_reverse = numberWithCommas((100 - (uploadedFileSize / limitFileSize * 100)).toFixed(3))
			html = '<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + usageRateFileSize_reverse + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + usageRateFileSize_reverse + '%;">'
			html += '<center><p style="color:black;">' + usageRateFileSize + 'MB / ' + usageRateFileSize + 'MB' + '(' + usageRateFileSize_rate + '% 사용중)</p></center>'
			html += '</div>'
		}
	}
	else
	{
		var uploadedFileSize = data.userinfo_uploadedfilesize.toFixed(2)		// 현재까지 업로드한 파일 크기
		var limitFileSize = data.userinfo_limitfilesize		// 업로드 한계 크기
		
		if (userinfo_limitfilesize > 0)
		{
			limitFileSize = data.userinfo_limitfilesize.toFixed(2)
		}

		if (limitFileSize == 0) {
			html = '<center><p style="color:black;">' + numberWithCommas(uploadedFileSize) + ' MB / 0.00 MB' + '</p></center>'
			
		} else if (limitFileSize == -1) {
			html = '<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">'
			html += '<center><p style="color:black;">' + numberWithCommas(uploadedFileSize) + ' MB 사용중</p></center>'
			html += '</div>'
			
		} else {
			var usageRateFileSize = numberWithCommas((uploadedFileSize / limitFileSize * 100).toFixed(2))
			var usageRateFileSize_reverse = numberWithCommas((100 - (uploadedFileSize / limitFileSize * 100)).toFixed(2))
			html = '<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + usageRateFileSize_reverse + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + usageRateFileSize_reverse + '%;">'
			html += '<center><p style="color:black;">' + usageRateFileSize + '% 사용중</p></center>'
			html += '</div>'
		}
	}
	
	return html
}