function printChannelList()
{		
	var url = "/youtube_metrics/get_youtube_metrics_channel_list/"

	var table = $('#board_channelList').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
		"pagingType": "simple",
		"lengthChange": false,
		"pageLength": 3,
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
			{"data": "Image"},
			{"data": "Content"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 채널이 검색되었습니다." },
		"language": { "lengthMenu": "",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" },
		"drawCallback": function( settings ) {
			 $("#board_channelList thead").remove();
		 }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};