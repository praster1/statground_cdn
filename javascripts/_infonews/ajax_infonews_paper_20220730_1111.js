function ajax_infonews_paper()
{
	var table = $('#board_paper_searchResult').DataTable( {
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
			"url": "/infonews/get_infonews_paper/",
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Paper"}
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