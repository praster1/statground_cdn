function ajax_get_category_content_keyword_list_table(categoryCode)
{
	url = "/smartstore/getSmartstoreCategoryContent_keywordList_table/" + categoryCode.toString() + "/"
	
	var table = $('#table_keywordList').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
		"searching": false,
		"lengthChange": false,
		"pageLength": 7,
		"ajax": {
			"url": url,
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Keyword"}
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