function printBoardList(categoryTag, tableName)
{		
	var url = "/get_webr_board_list/"+ categoryTag + "/Board/"

	var table = $('#' + tableName).DataTable( {
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
			{"data": "board"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 게시물 중, _START_ ~ _END_  번째 게시물" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기",
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