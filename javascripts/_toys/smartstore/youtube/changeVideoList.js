function changeVideoList(channelUUID)
{
	var table = $('#youtube_video_list').DataTable()
	table.clear()
	printYoutubeVideoList(channelUUID)
};