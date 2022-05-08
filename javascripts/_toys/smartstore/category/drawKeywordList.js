function drawKeywordList(dataKeywordList)
{
	var t1 = $("#table_keywordList").DataTable();
	t1.clear()
	
	for(key in dataKeywordList){
		html = '<tr>'
		html += '<td>'
					
		html += '<span style="color:black; font-size:medium;"><b>' + dataKeywordList[key].keyword + '</b></span>'
		
		html += '<br/>'
		
		html += '<code style="color:red; font-size:small;">'
		html += '<b>검색 횟수: ' + numberWithCommas(dataKeywordList[key].monthlyQcCnt) + '</b>'
		html += '</code>'
		html += '　'
		
		html += '<code style="color:blue; font-size:small;">'
		html += '<b>상품 수: ' + numberWithCommas(dataKeywordList[key].productCnt) + '</b>'
		html += '</code>'  
		
		html += '</td>'
		html += '</tr>'
		
		const temp = $(html)
		t1.row.add(temp).draw();
	}
}