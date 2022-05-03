function changeBookList(searchText)
{
	var table = $('#board_book_searchResult').DataTable()
	table.clear()
	printBookList(searchText)
};