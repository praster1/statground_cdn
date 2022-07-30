function table_youtube_channel_list()
{
	var table = $('#youtube_channel_list').DataTable( {
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"pagingType": "simple",
		"lengthChange": false,
		"pageLength": 5,
		"searching": true,
		"ajax": {
			"url": "/youtube/get_youtube_channel_list/",
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
		"oLanguage": { "sInfo" : "_TOTAL_개의 채널 중, _START_ ~ _END_ 번째 채널" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" }
	} );

	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );
}
