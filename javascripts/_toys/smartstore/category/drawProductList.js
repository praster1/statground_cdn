function drawProductList(dataProductInfo)
{
	if (dataProductInfo.checker == 0)
	{
		$("#divProductList_DataExist").hide()
		$("#divProductList_DataNotExist").show()
	}
	else
	{
		var t1 = $("#table_productList").DataTable();
		
		for(key in dataProductInfo.productList){
			html = '<tr>'
			html += '<td style="font-size:small;">'
			
			html += '<div id="everything" class="tab-pane active">'
			
			html += '<ul class="list-unstyled search-results-list">'
			html += '<li>'
			
			html += '<a href="' + dataProductInfo.productList[key].crUrl + '" target="_blank" class="has-thumb">'
			
			html += '<div class="result-thumb">'
			html += '<img src="' + dataProductInfo.productList[key].imageUrl + '" alt="Invoice" />'
			html += '</div>'
			
			html += '<span style="color:black">'
			html += textLengthOverCut(dataProductInfo.productList[key].productTitle, 100, " ...")
			html += '</span>'
			
			html += '<br/>'
			
			html += '<code style="color:red; font-size:small;">'
			html += '<b>순위: ' + dataProductInfo.productList[key].rank + '위</b>'
			html += '</code>'
			html += '　'
			
			html += '<code style="color:blue; font-size:small;">'
			html += '<b>가격: ' + numberWithCommas(dataProductInfo.productList[key].price) + '원</b>'
			html += '</code>'  
			
			html += '</a>'
			
			html += '</li>'
			html += '</ul>'
			
			html += '</div>'
			
			html += '</td>'
			html += '</tr>'
			
			const temp = $(html)
			t1.row.add(temp).draw();
		}
			
		$("#divProductList_DataExist").show()
		$("#divProductList_DataNotExist").hide()
	}
}