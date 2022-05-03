function ajax_infonews_report()
{
	var table = $('#board_report_searchResult').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": false,
		"pageLength": 3,
		"searching": false,
		"ajax": {
			"url": "/get_infonews_report/",
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Report"}
		],
		"oLanguage": { "sInfo" : "" },
		"language": { "lengthMenu": "" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
}