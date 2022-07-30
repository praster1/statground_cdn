function table_community_famous_timeline()
{
	var table = $('#table_community_famous_timeline').DataTable( {
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": false,
		"pagingType": "simple",
		"lengthChange": false,
		"pageLength": 4,
		"searching":false,
		"ajax": {
			"url": "/index/get_index_Community_famousTimeline/",
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Timeline"}
		],
		"oLanguage": { "sInfo" : "" },
		"language": { "lengthMenu": "" },
		"drawCallback": function( settings ) {
			 $("#table_community_famous_timeline thead").remove();
		 }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );
}