function changeList(categoryUUID)
{
	var table = $('#board_paper_searchResult').DataTable()
	table.clear()
	printPaperList(categoryUUID)
};