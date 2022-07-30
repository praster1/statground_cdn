function table_community_active_writer()
{
	var table = $('#table_community_active_writer').DataTable( {
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
		"pagingType": "simple",
		"lengthChange": false,
		"pageLength": 5,
		"searching":false,
		"ajax": {
			"url": "/community/get_community_contents_active_writer/",
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Username"},
			{"data": "Content"}
		],
		columnDefs: [
			{	targets: 0,	className: 'dt-body-center'	},
			{	targets: 1,	className: 'dt-body-right'	}
		],
		"oLanguage": { "sInfo" : "" },
		"language": { "lengthMenu": "",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );
}