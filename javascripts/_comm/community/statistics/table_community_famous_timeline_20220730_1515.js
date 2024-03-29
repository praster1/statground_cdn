function table_community_famous_timeline(getValue)
{
	getValue = getValue.replace("_", "")
	
	var tableName = '#table_community_famous_timeline_' + getValue
	var url = "/community/get_community_contents_famous_timeline/" + getValue + "/"
	
	var table = $(tableName).DataTable( {
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
		"searching":false,
		"ajax": {
			"url": url,
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
		"language": { "lengthMenu": "",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" },
		"drawCallback": function( settings ) {
			 $(tableName + " thead").remove();
		 }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );
}