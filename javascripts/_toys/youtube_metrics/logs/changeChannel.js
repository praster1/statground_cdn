function changeChannel(channelID = null)
{
	var table = $('#board_logs').DataTable()
	table.clear()
	printLogList(channelID)
};