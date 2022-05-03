function changeList(categoryUUID)
{
	var table = $('#board_patent_searchResult').DataTable()
	table.clear()
	printPatentList(categoryUUID)
};