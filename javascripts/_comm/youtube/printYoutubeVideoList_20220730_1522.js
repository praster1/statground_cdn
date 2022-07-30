function printYoutubeVideoList(uuid_channel)
{		
	var url = "/youtube/get_youtube_video_list/"
	
	if (uuid_channel != null)
	{
		url = url + uuid_channel + "/"
	}

	var table = $('#youtube_video_list').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"lengthChange": false,
		"pageLength": 3,
		"searching": true,
		"ajax": {
			"url": url,
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Image"},
			{"data": "Content"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 비디오 중, _START_ ~ _END_  번째 비디오" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};