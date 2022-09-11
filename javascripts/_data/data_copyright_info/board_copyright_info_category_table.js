function board_copyright_info_category_table()
{
	var table = $('#board_data_copyright_info_category').DataTable( {
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": "simple",
		"lengthChange": false,
		"searching": false,
		"pageLength": 3,
		"ajax": {
			"url": "/data_copyright_info/get_copyright_info_category/",
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
			{"data": "Attribute"}
		],
		"drawCallback": function( settings ) {
			 $("#board_data_copyright_info_category thead").remove();
		 },
		"oLanguage": { "sInfo" : "_TOTAL_개의 속성 중, _START_ ~ _END_  번째 속성" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기",
						  "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );
}