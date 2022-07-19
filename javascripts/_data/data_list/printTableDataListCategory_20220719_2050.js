function printTableDataListCategory()
{
	var table = $('#board_data_list_category').DataTable( {
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"searching": false,
		"paging": true,
		"pagingType": "simple",
		"lengthChange": false,
		"pageLength": 12,
		"ajax": {
			"url": "/get_data_list_category/",
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Category"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 카테고리가 검색되었습니다." },
		"language": { "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>"}
	} );

	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );
}