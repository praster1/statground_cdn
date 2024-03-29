function board_copyright_info_table()
{
	var table = $('#board_copyright_info_table').DataTable( {
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
		"lengthMenu": [ 5, 10, 15, 20, 25 ],
		"pageLength": 5,
		"ajax": {
			"url": "/data_copyright_info/get_copyright_info/",
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		columnDefs: [
			{	targets: 0,	className: 'dt-body-left'	}
		],
		"columns" : [
			{"data": "Copyright"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 게시물 중, _START_ ~ _END_  번째 게시물" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기",
						  "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );
}