function btnSearch() 
{
	var searchText = $("#inputSearchText").val()
	
	if (searchText == "" || searchText == null)
	{
		alert("검색어를 입력해주세요.")
		
	} else {
		$(".trigger_searchText").show()
		$('#inputSearchText').attr('disabled', true);
		$('#btnSearchText').attr('disabled', true);
	
		$.ajax({
			url : url = "/book/get_search_result_book/?searchText=" + searchText,
			success:function(data) {
					printBookList(searchText)
					$(".trigger_searchText").hide()
					
					$('#inputSearchText').attr('disabled', false);
					$('#btnSearchText').attr('disabled', false);
				}
		})
	}
}