function setUserCellUsage(data, type="full") 
{
	html = ""

	var usedCellSize = parseInt(data.userinfo_usedcellsize)		// 30일동안 사용한 셀 크기
	var limitCellSize = data.userinfo_limitcellsize		// 셀 사용 리밋

	if (type == "full")
	{
		if (limitCellSize == -1) {
			html = '<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">'
			html += '<center><p style="color:black;">' + numberWithCommas(usedCellSize) + '개 / ∞ 개' + '</p></center>'
			html += '</div>'
			
		} else {
			var usageRateCellSize = numberWithCommas((usedCellSize / limitCellSize * 100).toFixed(2))
			var usageRateCellSize_reverse = numberWithCommas((100 - (usedCellSize / limitCellSize * 100)).toFixed(2))
			html = '<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="' + usageRateCellSize_reverse + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + usageRateCellSize_reverse + '%;">'
			html += '<center><p style="color:black;">' + numberWithCommas(usedCellSize) + '개 / ' + numberWithCommas(limitCellSize) + '개 (' + usageRateCellSize + '% 사용중)</p></center>'
			html += '</div>'
		}
	}
	else
	{
		var usedCellSize = parseInt(data.userinfo_usedcellsize)		// 30일동안 사용한 셀 크기
		var limitCellSize = data.userinfo_limitcellsize		// 셀 사용 리밋

		if (limitCellSize == -1) {
			html = '<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">'
			html += '<center><p style="color:black;">' + numberWithCommas(usedCellSize) + '개 / ∞ 개' + '</p></center>'
			html += '</div>'
			
		} else {
			var usageRateCellSize = numberWithCommas((usedCellSize / limitCellSize * 100).toFixed(2))
			var usageRateCellSize_reverse = numberWithCommas((100 - (usedCellSize / limitCellSize * 100)).toFixed(2))
			html = '<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="' + usageRateCellSize_reverse + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + usageRateCellSize_reverse + '%;">'
			html += '<center><p style="color:black;">' + usageRateCellSize + '% 사용중</p></center>'
			html += '</div>'
		}
	}
	
	return html
}