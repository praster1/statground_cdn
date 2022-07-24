function printBoardList_index(categoryTag, tableName)
{		
	var url = "/get_webr_board_list/"+ categoryTag + "/Index/"

	var table = $('#' + tableName).DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"autoWidth": true,
		"paging": false,
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
			{"data": "board"}
		],
		"oLanguage": { "sInfo" : "" },
		"language": { "lengthMenu": "",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>"},
	   "fnDrawCallback": function ( oSettings ) {
			$(oSettings.nTHead).hide();
		}
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};