function changeDataList(categoryUUID)
{
	var table = $('#board_data_list').DataTable()
	table.clear()
	printTableDataList(categoryUUID)
};