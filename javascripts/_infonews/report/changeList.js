function changeList(categoryUUID)
{
	var table = $('#board_report_searchResult').DataTable()
	table.clear()
	printReportList(categoryUUID)
};