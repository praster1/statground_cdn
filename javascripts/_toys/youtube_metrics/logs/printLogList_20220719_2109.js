function printLogList(channelID = null)
{		
	var url = "/get_youtube_metrics_log_list/"
	
	if (channelID != null)
	{
		url = url + channelID + "/"
	}
	
	

	var table = $('#board_logs').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
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
			{"data": "Logs"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 로그 중, _START_ ~ _END_  번째 로그" },
		"language": { "lengthMenu": "",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" },
		"drawCallback": function( settings ) {
			 $("#board_logs thead").remove();
		 }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};