function printChannelList()
{		
	var url = "/youtube_metrics/get_board_channel_searchResult/"
	var searchText = $("#inputSearchText").val()
	
	if (searchText == null || searchText == "")			{	searchText = "null";	}
	
	url = url + searchText + "/"

	var table = $('#board_channel_searchResult').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
		"lengthMenu": [ 5, 10, 15, 20, 25 ],
		"pageLength": 5,
		"searching": false,
		"ajax": {
			"url": url,
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Channel"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 채널 중, _START_ ~ _END_  번째 채널" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};